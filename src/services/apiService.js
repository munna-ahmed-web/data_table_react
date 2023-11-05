import axios from "axios"
const apiMethods = {
    getUsers : function(){
        return axios.get("https://jsonplaceholder.typicode.com/users", {
            timeout: 3000,
        });
    }
}

export default apiMethods