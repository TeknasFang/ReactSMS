import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateStudent } from "../../../redux/action";
import PropTypes from 'prop-types';
const UpdateStudent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
    dispatch(updateStudent(props.id,data))
  }
  return (
    <>
      <span onClick={handleShow}>
        {/* Update */}
        <i className="fa-regular fa-pen-to-square"></i>
      </span>

      <Modal dialogClassName="my-modal" className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span style={{letterSpacing:'7px',marginLeft:'100px'}}> UPDATE STUDENT</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-4 input-row">
              <div className="col-2">Name: </div>
              <div className="col-10">
                <input defaultValue={props.name} {...register("name", { required: true })} />
              </div>
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="row mt-4 input-row">
              <div className="col-2">Email: </div>
              <div className="col-10">
                <input defaultValue={props.email} {...register("email", { required: true })} />
              </div>
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Mobile Number: </div>
              <div className="col-10">
                <input defaultValue={props.mobileNumber} {...register("mobileNumber", { required: true })} />
              </div>
              {errors.mobileNumber && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Roll Number: </div>
              <div className="col-10">
                <input defaultValue={props.rollNumber}
                  type="number"
                  {...register("rollNumber", { required: true })}
                />
              </div>
              {errors.rollNumber && <span>This field is required</span>}
            </div>

            <div className="row mt-4 input-row">
              <div className="col-2">Standard: </div>
              <div className="col-10">
                <select defaultValue={props.standard} {...register("standard", { required: true })}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            {errors.standard && <span>This field is required</span>}
            <button type="submit"  onClick={handleClose}>Update Student</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

UpdateStudent.propTypes = {
  id:PropTypes.string,
  name:PropTypes.string,
  email:PropTypes.string,
  mobileNumber:PropTypes.string,
  rollNumber:PropTypes.string,
  standard:PropTypes.string

}

export default UpdateStudent;
