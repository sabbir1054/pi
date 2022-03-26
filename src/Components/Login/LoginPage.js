import React from 'react';
import Login from './Login';

const LoginPage = () => {
    return (
      <>
        <div className="home-bg">
          <h1 className="text-light text-center display-3 pt-5 ">
            Welcome to <span className="colored-text">Smart School System</span>
          </h1>

          <Login></Login>
        </div>
      </>
    );
};

export default LoginPage;