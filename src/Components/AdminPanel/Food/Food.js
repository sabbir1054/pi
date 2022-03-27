import React from "react";
import { Table } from "react-bootstrap";
import { FcCancel, FcOk } from "react-icons/fc";
import './Food.css'
const Food = () => {
  return (
    <div className="food-bg">
      <h1 className="text-center py-3 text-decoration-underline text-light">Get Food</h1>
      <div className="stu-table px-3 pt-3">
        <Table striped bordered hover>
          <thead className="t-head">
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Class/Department</th>
              <th>Section</th>
              <th>Take Food</th>
            </tr>
          </thead>
          <tbody className="t-body">
            <tr>
              <td>stu_id</td>
              <td>student.name</td>
              <td>student.email</td>
              <td>student.class</td>
              <td>student.section</td>
              <td>
                <FcOk size={25}></FcOk>
              </td>
              
            </tr>
            <tr>
              <td>stu_id</td>
              <td>student.name</td>
              <td>student.email</td>
              <td>student.class</td>
              <td>student.section</td>
              <td>
                <FcCancel size={25} />
              </td>
            
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Food;
