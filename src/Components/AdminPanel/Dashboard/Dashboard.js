import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Dashboard.css";
const Dashboard = () => {
  const [student, setStudent] = useState();

  // load student data
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="dash-wrapper">
      <div className="dash-wrapper2">
        <h1>This is Dashboard</h1>
        <Container>
          <Row className="d-flex justify-content-around">
            <Col md={4}>uyiyu</Col>
            <Col md={4}>iuiu</Col>
            <Col md={4}>iuifi</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
