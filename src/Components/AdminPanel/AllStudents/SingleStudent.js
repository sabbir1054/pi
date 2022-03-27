import React from 'react';

const SingleStudent = ({student}) => {
    return (
      <>
        <tr>
          <td>{student.stu_id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.class}</td>
          <td>{student.section}</td>
        </tr>
      </>
    );
};

export default SingleStudent;