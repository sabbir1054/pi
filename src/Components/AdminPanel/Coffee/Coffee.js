import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { db } from '../../../Firebase/DbInit';
import SingleCoffee from './SingleCoffee';

const Coffee = () => {
  const [student, setStudent] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  //coffee data
  useEffect(() => {
    const coffeeCollectRef = collection(db, "coffee");
    const coffeeMake = onSnapshot(coffeeCollectRef, (snapshot) => {
      setCoffeeData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      coffeeMake();
    };
  }, []);
  // load all student data
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

  //matches data with food and student
  let arr1 = [];
  let arr2 = [];
  let newArr = [];

  const getMatch = () => {
    student.map((stu) => {
      arr1.push(stu.data);
    });
    coffeeData.map((coffee) => {
      arr2.push(coffee.data);
    });
    for (let i = 0; i < arr1.length; i++) {
      for (let e = 0; e < arr2.length; e++) {
        if (arr1[i].stu_id == arr2[e].take_coffee_id) {
          newArr.push(arr1[i]);
        }
      }
    }
  };
  //after load data matching function call
  student.length && coffeeData.length && getMatch();

  newArr.length&&console.log(newArr);
    return (
      <>
        <div className="students-wrapper">
          <h1 className="text-center py-3 text-decoration-underline text-light">
            Take Coffee
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
                </tr>
              </thead>
                        <tbody className="t-body">
                            
                            {
                                newArr.length&&newArr.map((coffee)=>{<SingleCoffee coffee={coffee}></SingleCoffee>})
                            }
                
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
};

export default Coffee;