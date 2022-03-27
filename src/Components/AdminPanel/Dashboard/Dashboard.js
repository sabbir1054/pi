import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Dashboard.css";
const Dashboard = () => {
  const [student, setStudent] = useState([]);

  // load student data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sabbir1054/pi/master/src/Data.json"
    )
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  return (
    <div className="dash-wrapper">
      <div className="dash-wrapper2">
        <h1>This is Dashboard</h1>
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
                <h4 className="text-center">75</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="total-student  p-5 rounded">
                <h3 className="text-center">Take Food </h3>
                <h4 className="text-center">41</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
