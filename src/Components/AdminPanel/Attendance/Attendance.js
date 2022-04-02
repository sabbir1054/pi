import React from "react";
import { Table } from "react-bootstrap";
import { FcCancel, FcOk } from "react-icons/fc";
const Attendance = () => {
  // const [date, setdate] = useState('');

    // date and time 
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear(); 
    const suffix = today.getHours() >= 12 ? "PM" : "AM";
    const time = today.getHours() + " : " + today.getMinutes() + " "+ suffix;

  return (
    <div className="home-bg">
      <h1 className="text-center text-decoration-underline py-3 text-light ">
        Student Attendance
      </h1>
      <div className="atten-table px-3 pt-3">
        <Table striped bordered hover>
          <thead className="t-head">
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Class/Department</th>
              <th>Section</th>
              <th>Attendance</th>
              <th>Date</th>
              <th>Time</th>
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
              <td>{date}</td>
              <td>{time}</td>
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
              <td>{date}</td>
              <td>{time}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Attendance;
