import React, { useRef, useEffect,useState } from "react";
import ReactTable from "react-table";
import styles from './StudentList.module.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import StudentTable from "./StudentTable";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../redux/action";
const StudentList = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let sInfo = useRef()
  let studentData = useSelector((state) => state.studentReducer);
  //student-info card details 
  let studentName ;
  let [studentInfo,setStudentInfo] = useState({fullName:''})

  const handleUpdate = (username) => {
    navigate("/home/admin/update/student/" + username);
  };

  const handleDelete = (username) => {
    dispatch(deleteStudent(username));
  };


  const handleMouseEnter = (e,student)=>{
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(sInfo.current)
    sInfo.current.style.backgroundColor = `black`
    sInfo.current.style.left = e.clientX+"px"
    sInfo.current.style.top = e.clientY+"px"
    sInfo.current.style.display = "block"
    console.log(e.clientY)
    setStudentInfo("sanket")
  }
  const handleMouseLeave = ()=>{
    sInfo.current.style.display = "none"

  }

  

  return (
    <div>
      {/* {JSON.stringify(studentData)} */}
      {/* <StudentTable/> */}
      {JSON.stringify(studentInfo)}
      <h3 style={{textAlign:'center',letterSpacing:'10px',marginBottom:'3rem'}}>STUDENT DATA</h3>
      <TableContainer sx={{ overflowX:'scroll' }}  component={Paper}>
        <Table sx={{ minWidth: 820,maxHeight:1000, overflowX:'scroll' }} aria-label="simple table">
          <TableHead sx={{backgroundColor:'black',color:'rgb(252, 163, 17)'}}>
            <TableRow >
              <TableCell sx={{color:'rgb(252, 163, 17)'}}>Full Name</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">Standard</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">dob</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">Stream</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">Phone</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">Parent Phone</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right">Adress</TableCell>
              <TableCell sx={{color:'rgb(252, 163, 17)'}} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName + " " + row.lastName}
                </TableCell>
                <TableCell align="right">{row.standard}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.stream}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.parentPhone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <i
                    onClick={(e) => {
                      handleUpdate(row.username);
                    }}
                    class="fa-solid fa-pen"
                  ></i>
                  <i
                    onClick={(e) => {
                      handleDelete(row.username);
                    }}
                    className="fa-solid fa-trash mx-2"
                  ></i>
                  
                  <i className="fa-solid fa-circle-info" onMouseLeave={handleMouseLeave} onMouseEnter={(e)=>{
                    handleMouseEnter(e,row)
                  }}></i>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.studentInfo} ref={sInfo}>
        aas
                  <div className={styles.studentCard}>
                    a,b,c,d {studentInfo}
                  </div>
                </div>

    </div>
  );
};

export default StudentList;
