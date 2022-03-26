import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Home.css'
const Home = () => {
    return (
      <>
        <div className="home-bg d-flex flex-column align-items-center">
          <h1 className="text-light text-center display-3 pt-5 ">
            Welcome to <span className="colored-text">Smart School System</span>
          </h1>

          <Link to="/dashboard">
            {" "}
            <div className="btn btn-primary ">Dashboard</div>
          </Link>
        </div>
      </>
    );
};

export default Home;