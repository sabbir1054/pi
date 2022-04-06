import React from 'react';

const SingleStudent = ({student}) => {
    return (
      <>
        <tr>
          <td>{student.data.stu_id}</td>
          <td>{student.data.name}</td>
          <td>{student.data.email}</td>
          <td>{student.data.class}</td>
          <td>{student.data.section}</td>
        </tr>
      </>
    );
};

export default SingleStudent;