import React from 'react';
import { FcCancel, FcOk } from "react-icons/fc";

const SingleAttendance = (props) => {
  console.log(props);
    return (
      <>
        <tr>
                {/* <td>{ atten.stu_id}</td> */}
          <td>student.name</td>
          <td>student.email</td>
          <td>student.class</td>
          <td>student.section</td>
          <td>
            <FcOk size={25}></FcOk>
          </td>
          {/* <td>{date}</td>
              <td>{time}</td> */}
        </tr>
      </>
    );
};

export default SingleAttendance;