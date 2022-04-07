import React from 'react';
import { FcCancel, FcOk } from "react-icons/fc";
const SingleFood = ({food}) => {
    return (
      <tr>
        <td>{food.stu_id}</td>
        <td>{food.name}</td>
        <td>{food.email}</td>
        <td>{food.class}</td>
        <td>{food.section}</td>

        <td>
          <FcOk size={25}></FcOk>
        </td>
      </tr>
    );
};

export default SingleFood;