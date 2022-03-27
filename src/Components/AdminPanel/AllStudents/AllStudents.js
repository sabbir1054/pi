import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AllStudents.css';
import SingleStudent from './SingleStudent';
const AllStudents = () => {
    const [students, setStudents] = useState([]);

    // load student data
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/sabbir1054/pi/master/src/Data.json"
      )
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }, []);

    return (
      <div className="students-wrapper">
        <h1 className="text-center py-3 text-decoration-underline text-light">
          All Students Information
        </h1>
        <div className="stu-table px-3 pt-3">
          <Table striped bordered hover>
            <thead className='t-head'>
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Class/Department</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody className='t-body'>
              {students.map((student) => (
                <SingleStudent student={student} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
};

export default AllStudents;