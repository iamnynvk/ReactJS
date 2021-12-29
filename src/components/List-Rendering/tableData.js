import React from "react";

function TableData(props) {

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>{props.userData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
