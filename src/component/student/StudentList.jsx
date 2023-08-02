import React,{useRef, useEffect} from "react";
import ReactTable from 'react-table'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import StudentTable from "./StudentTable";
const StudentList = () => {


  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  let studentData = useSelector((state) => state.studentReducer);
  let updatedData = studentData.map((data) => {
    delete data.studentImg;
    delete data._id;
    delete data.username;
    delete data.password;
    delete data.email;
    delete data.parentFirstName;
    delete data.parentLastName;
    delete data.parentEmail;
    delete data.adress;
    delete data.__v;
    return data;
  });


   
     

  return (
    <div>
      {JSON.stringify(updatedData)}
      {/* <StudentTable/> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>


            <TableCell>Full Name</TableCell>
            <TableCell align="right">Standard</TableCell>
            <TableCell align="right">dob</TableCell>
            <TableCell align="right">Stream</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Parent Phone</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName+ ' '+row.lastName}
              </TableCell>
              <TableCell align="right">{row.standard}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.stream}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.parentPhone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right"><i className="fa-solid fa-trash"></i><i className="fa-solid fa-trash"></i></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default StudentList;
