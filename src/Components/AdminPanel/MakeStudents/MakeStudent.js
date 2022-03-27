import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./MakeStudent.css"
const MakeStudent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="home-bg">
      <h1 className="text-decoration-underline text-center text-light py-3 ">
        New Student
      </h1>

      <Container className="text-light ">
        <div className="admission-form-wrapper ms-5 mt-5 px-5  pt-3 pb-5 ">
          <h3 className="text-center">Register</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="admission-form">
            <input
              placeholder="ID"
              {...register("id", { required: true })}
              className=""
            />
            {errors.idRequired && <span>This field is required</span>}
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className=""
            />
            {errors.nameRequired && <span>This field is required</span>}
            <br />
            <input
              placeholder="Email"
              {...register("email", { required: true })}
            />{" "}
            {errors.emailRequired && <span>This field is required</span>}
            <input
              placeholder="Class/Department"
              {...register("class", { required: true })}
              className=""
            />
            {errors.classRequired && <span>This field is required</span>}
            <br />
            <input
              placeholder="Section"
              {...register("section", { required: true })}
              className=""
            />
            {errors.sectionRequired && <span>This field is required</span>}
            <br />
            <input type="submit" className="submit-btn" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default MakeStudent;
