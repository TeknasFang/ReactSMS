import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../redux/action";
const AddStudent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleClose();
    reset();
    dispatch(addStudent(data));
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>

      <Modal dialogClassName="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span style={{letterSpacing:'7px',marginLeft:'100px'}}> ADD STUDENT</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="student-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-4 input-row">
              <div className="col-2">Name: </div>
              <div className="col-10">
                <div className="input-container">
                  <input {...register("name", { required: true })} />
                  {errors.name?.type === "required" && (
                    <span className="">Name is a required field</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Email: </div>
              <div className="col-10">
                <div className="input-container">
                  <input {...register("email", { required: true,pattern:{
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "invalid email address"
      } })} />
                  {errors.email?.type === "required" && (
                    <span className="">Email is a required field</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="">Please enter valid Email </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Mobile Number: </div>
              <div className="col-10">
                <div className="input-container">
                  <input {...register("mobileNumber", { required: true, minLength:10,maxLength:10 })} />
                  {errors.mobileNumber?.type === "required" && (
                    <span className="">Mobile Number is a required field</span>
                  )}
                  {errors.mobileNumber?.type === "minLength" && (
                    <span className="">Please enter valid mobile number</span>
                  )}
                  {errors.mobileNumber?.type === "maxLength" && (
                    <span className="">Please enter valid mobile number</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Roll Number: </div>
              <div className="col-10">
                <div className="input-container">
                  <input
                    type="number"
                    {...register("rollNumber", { required: true })}
                  />
                  {errors.rollNumber?.type === "required" && (
                    <span className="">Roll Number is a required field</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Standard: </div>

              <div className="col-10">
                <div className="input-container">
                  <select {...register("standard", { required: true })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  {errors.username?.type === "required" && (
                    <span className="">Username is a required field</span>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="">
              Add Student
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudent;
