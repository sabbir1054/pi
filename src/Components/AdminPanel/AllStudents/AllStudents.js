import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { db } from '../../../Firebase/DbInit';
import './AllStudents.css';
import SingleStudent from './SingleStudent';
const AllStudents = () => {
  
  const [student, setStudent] = useState([]);

  
  //load Realtime data from firebase

  useEffect(() => {
    const studentsCollectRef = collection(db, "students_info");
    const stuMake = onSnapshot(studentsCollectRef, (snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      stuMake();
    };
  }, []);

 console.log(student);
  
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
              {student.map((student) => (
                <SingleStudent student={student} key={student.id }/>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
};

export default AllStudents;