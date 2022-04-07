import React from 'react';
import { FcCancel, FcOk } from "react-icons/fc";

const SingleAttendance = ({atten}) => {

    return (
      <>
        <tr>
          <td>{atten.stu_id}</td>
          <td>{atten.name}</td>
          <td>{atten.email}</td>
          <td>{atten.class}</td>
          <td>{atten.section}</td>
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