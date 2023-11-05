import DataTable from "./Components/dataTable";
import './App.css'

function App() {


  return (
    <div className="main">
      <div className="header">
        <h3>Display User Information</h3>
        <p>
          This application is fatching user information from {" "}
          <a href="https://jsonplaceholder.typicode.com/">
            jsonplaceholder.typicode.com
          </a>{" "}
          then showing these by Material UI table dynamically
        </p>
      </div>

      <div className="tableShow">
        <DataTable />
      </div>
    </div>
  );
}

export default App
