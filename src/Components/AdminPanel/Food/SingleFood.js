import React from 'react';
import { FcCancel, FcOk } from "react-icons/fc";
const SingleFood = () => {
    return (
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
    );
};

export default SingleFood;