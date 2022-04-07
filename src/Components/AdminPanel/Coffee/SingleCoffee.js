import React from "react";

const SingleCoffee = ({ coffee }) => {
  return (
    <>
      <tr>
        <td>{coffee.stu_id}</td>
        <td>{coffee.name}</td>
        <td>{coffee.email}</td>
        <td>{coffee.class}</td>
        <td>{coffee.section}</td>
      </tr>
    </>
  );
};

export default SingleCoffee;
