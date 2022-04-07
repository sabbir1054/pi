import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { db } from "../../../Firebase/DbInit";
import SingleAttendance from "./SingleAttendance";

const Attendance = () => {
  // const [date, setdate] = useState('');
  const [student, setStudent] = useState([]);
  const [attenData, setAttenData] = useState([]);

  // date and time
  // const today = new Date();
  // const date =
  //   today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  //   const suffix = today.getHours() >= 12 ? "PM" : "AM";
  //   const time = today.getHours() + " : " + today.getMinutes() + " "+ suffix;


  
  //load Realtime data from firebase
  useEffect(() => {
    //all students
    const studentsCollectRef = collection(db, "students_info");
    const stuMake = onSnapshot(studentsCollectRef, (snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    //scanning card data
    const attenCollectRef = collection(db, "attendance");
    const attenMake = onSnapshot(attenCollectRef, (snapshot) => {
      setAttenData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      stuMake();
      attenMake();
    };
  }, []);

  //matches data with food and student
  let arr1 = [];
  let arr2 = [];
  let attenNewArr = [];

  const getMatch = () => {
    student.map((stu) => {
      arr1.push(stu.data);
    });
    attenData.map((atten) => {
      arr2.push(atten.data);
    });
    for (let i = 0; i < arr1.length; i++) {
      for (let e = 0; e < arr2.length; e++) {
        if (arr1[i].stu_id == arr2[e].atten_id) {
          attenNewArr.push(arr1[i]);
        }
      }
    }
  };
  //after load data matching function call
  student.length && attenData.length && getMatch();

  //update attendance counter
  const countDashboard = (count) => {
    const docRef = doc(db, "dashboardCounter", "attendance_count");
    updateDoc(docRef, { count })
      .then((res) => {
        //  console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateCounter = () => {
    countDashboard(attenNewArr.length);
  };
  attenNewArr.length && updateCounter();

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
            {attenNewArr.length &&
              attenNewArr.map((atten) => (
                <SingleAttendance
                  atten={atten}
                  key={atten.stu_id}
                ></SingleAttendance>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Attendance;
