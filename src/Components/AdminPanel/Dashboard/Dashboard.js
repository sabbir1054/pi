import { Dropdown } from "bootstrap";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../../Firebase/DbInit";
import useAuth from "../../../Hooks/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const [student, setStudent] = useState([]);
  const { user } = useAuth();
  const [mood, setMood] = useState("stop");
  const [isActive, setIsActive] = useState(false);
  const [dbMood, setDbMood] = useState("");
  const [count, setCount] = useState('');
  
  //load Realtime data from firebase

  useEffect(() => {
//all student data
const studentsCollectRef = collection(db, "students_info");
const stuMake = onSnapshot(studentsCollectRef, (snapshot) => {
  setStudent(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
});
    //mood
    const dbMoodCollectRef = collection(db, "mood");
    const dbMoodMake = onSnapshot(dbMoodCollectRef, (snapshot) => {
      setDbMood(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });


// counter data
    const counterCollectRef = collection(db, 'dashboardCounter');
    const countMake = onSnapshot(counterCollectRef, (snapshot) => {
      setCount(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    return () => {
      stuMake();
      dbMoodMake();
      countMake();
    };
  }, []);


  // set machine mood status
  const moodDb = (status) => {
    const docRef = doc(db, "mood", "status");
    updateDoc(docRef, { status })
      .then((res) => {
        //  console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButton = (mood) => {
    setMood(mood);
    moodDb(mood);
    setIsActive(true);
  };

  return (
    <div className="dash-wrapper">
      <div className="dash-wrapper2  text-center">
        <img src={`${user.photoURL}`} alt="" className="rounded-circle mt-3" />
        <h1 className="text-center pt-3"> {`Welcome ${user.displayName}`}</h1>

        <Container>
          <Row className="d-flex justify-content-around pt-5">
            <Col md={4}>
              <div className="total-student  p-5 rounded">
                <h3 className="text-center">Total students</h3>
                <h4 className="text-center">{student.length}</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="total-student  p-5 rounded">
                <h3 className="text-center">Present students</h3>
                <h4 className="text-center">
                  {count.length && count[0].data.count}
                </h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="total-student  p-5 rounded">
                <h3 className="text-center">Take Food </h3>
                <h4 className="text-center">
                  {count.length && count[1].data.count}
                </h4>
              </div>
            </Col>
            <Col md={8} className="mt-5">
              <div className="total-student  p-5 pb-3 rounded">
                <h3 className="text-center ">Select Device Mood </h3>
                <Row className="pt-4">
                  <Col md={3}>
                    <button
                      className="google-btn   moodBtn"
                      onClick={() => handleButton("attendance")}
                    >
                      Attendance
                    </button>
                  </Col>
                  <Col md={3}>
                    <button
                      className="google-btn moodBtn"
                      onClick={() => handleButton("food")}
                    >
                      Food
                    </button>
                  </Col>
                  <Col md={3}>
                    <button
                      className="google-btn moodBtn"
                      onClick={() => handleButton("coffee")}
                    >
                      Coffee
                    </button>
                  </Col>
                  <Col md={3}>
                    <button
                      className="google-btn moodBtn"
                      onClick={() => handleButton("umbrella")}
                    >
                      Umbrella
                    </button>
                  </Col>
                  <p className=" mt-3 fs-3 text-warning ">
                    {`Device is working for ${dbMood && dbMood[0].data.status}`}
                  </p>
                </Row>
                <Row>
                  <button
                    className="google-btn moodBtn w-25 mx-auto"
                    onClick={() => handleButton("stop")}
                  >
                    Stop
                  </button>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="mt-5  "></div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
