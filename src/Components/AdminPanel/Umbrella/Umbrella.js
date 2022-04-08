import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { db } from "../../../Firebase/DbInit";
import SingleUmbrella from "./SingleUmbrella";

const Umbrella = () => {
  const [student, setStudent] = useState([]);
  const [umbrellaData, setUmbrellaData] = useState([]);

  //load data from database
  useEffect(() => {
    //all student data load
    const studentsCollectRef = collection(db, "students_info");
    const stuMake = onSnapshot(studentsCollectRef, (snapshot) => {
      setStudent(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    //umbrella data scan
    const umbrellaCollectRef = collection(db, "umbrella");
    const umbrellaMake = onSnapshot(umbrellaCollectRef, (snapshot) => {
      setUmbrellaData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      stuMake();
      umbrellaMake();
    };
  }, []);

  //matches data with food and student
  let arr1 = [];
  let arr2 = [];
  let newArr = [];

  const getMatch = () => {
    student.map((stu) => {
      arr1.push(stu.data);
    });
    umbrellaData.map((umbrella) => {
      arr2.push(umbrella.data);
    });
    for (let i = 0; i < arr1.length; i++) {
      for (let e = 0; e < arr2.length; e++) {
        if (arr1[i].stu_id == arr2[e].take_um_id) {
          newArr.push(arr1[i]);
        }
      }
    }
  };
  //after load data matching function call
  student.length && umbrellaData.length && getMatch();

    
    
    
    
    
    
  return (
    <>
      <div className="students-wrapper">
        <h1 className="text-center py-3 text-decoration-underline text-light">
          Take Umbrella
        </h1>
        <div className="stu-table px-3 pt-3">
          <Table striped bordered hover>
            <thead className="t-head">
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Class/Department</th>
                <th>Section</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="t-body">
              {newArr.length &&
                newArr.map((umbrella) => (
                    <SingleUmbrella umbrella={umbrella} key={umbrella.stu_id }/>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Umbrella;
