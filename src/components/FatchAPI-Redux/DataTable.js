import React, { useEffect, useState } from "react";

function DataTable(props) {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    setTableData(props.tableData);
  }, [props]);

  return (
    <div>
      <table
        border="1px"
        style={{
          backgroundColor: "aqua",
          borderColor: "red",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((element) => {
            console.log(element);
            return (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
                <td>{element.address.city}</td>
                <td>{element.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
