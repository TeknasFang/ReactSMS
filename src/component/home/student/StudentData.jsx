import React,{useEffect} from "react";
import axios from "axios";
import UpdateStudent from "./UpdateStudent";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import './loader.css'
import {
  setStudent,
  deleteStudent,
} from "../../../redux/action";
const StudentData = (props) => {
  let dispatch = useDispatch();
  let studentData = useSelector((state) => state.studentReducer);

  console.log("student rendered!!!");
  console.log(studentData);
  let deleteStudentx = (id) => {
    if (window.confirm("Are you sure you want to delete the record?")) {
      dispatch(deleteStudent(id));
      setTimeout(() => {
        props.setChanges((prev) => prev + 1);
      }, 500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5800/student").then((res) => {
        dispatch(setStudent(res.data));
      });
    }, 1500);
  }, []);

  let studentTable =
    !studentData.length == 0 ? (
      studentData.map((student, id) => (
        <tr key={id}>
          <td>{student.name}</td>
          <td>{student.standard}</td>
          <td>{student.rollNumber}</td>
          <td>{student.email}</td>
          <td>{student.mobileNumber}</td>
          <td className="action">
            <UpdateStudent
              id={student._id}
              name={student.name}
              standard={student.standard}
              rollNumber={student.rollNumber}
              email={student.email}
              mobileNumber={student.mobileNumber}
              setChanges={props.setChanges}
            />
            <span
              className=""
              onClick={() => {
                deleteStudentx(student._id);
              }}
            >
              {/* Delete */}
              <i className="fa-solid fa-trash"></i>
            </span>
          </td>
        </tr>
      ))
    ) : (
      <div>
      <div className="loader">
  <div className="justify-content-center jimu-primary-loading"></div>
</div></div>
    );

  return (
    <div className="student-data mt-5">
      {/* {JSON.stringify(studentData)} */}
      <div className="table-container">

      <table>
      <thead>
        <tr>
        <th scope="col">Name</th>
            <th scope="col">Standard</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>{studentData && studentTable}</tbody>

       
      
    </table>
      </div>
    </div>
  );
};

StudentData.propTypes={
  setChanges:PropTypes.func
}

export default StudentData;
