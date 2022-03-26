import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {





  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const { loginWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard";
  const handleLogin = () => {
    loginWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };





  return (
    <div className="d-flex justify-content-center mt-5 log-section">
      <div className="login text-light px-4">
        <h3 className="fw-bold py-3 pt-4 text-center">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="email" className="mb-2 fs-4">
            Email:
          </label>{" "}
          <br />
          <input
            className="input-field"
            type={"email"}
            {...register("example")}
          />{" "}
          <br />
          <label htmlFor="Email" className="my-2 mt-4 fs-4">
            Password:
          </label>{" "}
          <br />
          <input
            className="input-field"
            {...register("exampleRequired", { required: true })}
          />{" "}
          <br />
          {errors.exampleRequired && <span>This field is required</span>} <br />
          <input
            type="submit"
            className="submit-btn d-flex justify-content-center mx-auto"
          />
          <hr />
          <p className="text-center login-with">Or</p>
        </form>
        <button className="google-btn" onClick={handleLogin}>
          {" "}
          <img src="https://i.ibb.co/HPd5k52/pngwing-com.png" alt="" width='25px' /> Login
          with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
