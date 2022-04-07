import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { db } from "../../../Firebase/DbInit";
import './Food.css'
import SingleFood from "./SingleFood";
const Food = () => {
const [student, setStudent] = useState([]);

const [foodData, setFoodData] = useState([]);

//coffee data
useEffect(() => {
  const foodCollectRef = collection(db, "foods");
  const foodMake = onSnapshot(foodCollectRef, (snapshot) => {
    setFoodData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  });
  return () => {
    foodMake();
  };
}, []);


//set student by realtime database
useEffect(() => {
  const studentsCollectRef = collection(db, "students_info");
  const stuMake = onSnapshot(studentsCollectRef, (snapshot) => {
    setStudent(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
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
  foodData.map((coffee) => {
    arr2.push(coffee.data);
  });
  for (let i = 0; i < arr1.length; i++) {
    for (let e = 0; e < arr2.length; e++) {
      if (arr1[i].stu_id == arr2[e].get_food_id) {
        newArr.push(arr1[i]);
      }
    }
  }
};
//after load data matching function call
student.length && foodData.length && getMatch();

console.log(newArr);
  

  return (
    <div className="food-bg">
      <h1 className="text-center py-3 text-decoration-underline text-light">Get Food</h1>
      <div className="stu-table px-3 pt-3">
        <Table striped bordered hover>
          <thead className="t-head">
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Class/Department</th>
              <th>Section</th>
              <th>Take Food</th>
            </tr>
          </thead>
          <tbody className="t-body">
            
            {
              newArr.length && newArr.map(food => (
                <SingleFood food={food} key={ food.stu_id}/>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Food;
