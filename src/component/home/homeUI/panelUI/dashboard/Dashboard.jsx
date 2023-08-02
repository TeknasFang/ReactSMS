import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setStudent } from '../../../../../redux/action';
import AdminDashboard from './AdminDashboard'
import StudentDashboard from './StudentDashboard'
const Dashboard = () => {
  let dispatch =  useDispatch()
  let currentUserInfo = useSelector(state=>state.currentUserInfoReducer)
  const params = useParams()
  const role = params.role
  useEffect(()=>{
    axios.get("http://localhost:5800/student").then((res) => {
        dispatch(setStudent(res.data));
      });
  },[])
  return (
    <div>
      {JSON.stringify(currentUserInfo)}
    {role=="admin"&&<AdminDashboard/>}
    {role=="student"&&<StudentDashboard/>}
    </div>
  )
}

export default Dashboard