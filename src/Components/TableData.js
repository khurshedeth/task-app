import React from "react";

const TableData = ({ data }) => {
  const tableData = data.map((item) => (
    <tr key={item.Id}>
    <td>{item.Id}</td>
      <td>{item.Year}</td>
      <td>{item.Medals}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th> Id</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default TableData;
