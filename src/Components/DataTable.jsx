import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import apiMethods from "../services/apiService";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 220 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "website", headerName: "Website", width: 150 },
  { field: "company", headerName: "Company", width: 150 },
];
function DataTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    apiMethods.getUsers().then((res) => {
      res.data.forEach((element) => {
        setRows((prev) => {
          return [
            ...prev,
            { id: element.id, name: element.name, email: element.email, username: element.username, website: element.website, company:element.company.name },
          ];
        });
      });
    });
  }, []);


  return (
    <div>
      {rows && (
        <div className="table" style={{ height: 400, width: "70%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      )}
    </div>
  );
}

export default DataTable;
