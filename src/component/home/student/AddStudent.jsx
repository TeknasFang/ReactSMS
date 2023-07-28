import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addStudent } from "../../../redux/action";
const AddStudent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    handleClose()
    reset()
    dispatch(addStudent(data))
 }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-4 input-row">
              <div className="col-4">Name: </div>
              <div className="col-8">
                <input {...register("name", { required: true })} />
              </div>
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-4">Email: </div>
              <div className="col-8">
                <input {...register("email", { required: true })} />
              </div>
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-4">Mobile Number: </div>
              <div className="col-8">
                <input {...register("mobileNumber", { required: true })} />
              </div>
              {errors.mobileNumber && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-4">Roll Number: </div>
              <div className="col-8">
                <input
                  type="number"
                  {...register("rollNumber", { required: true })}
                />
              </div>
              {errors.rollNumber && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-4">Standard: </div>
              <div className="col-8">
                <select {...register("standard", { required: true })}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            {errors.standard && <span>This field is required</span>}
            <button type="submit" className='btn btn-primary my-5'>Add Student</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudent;
