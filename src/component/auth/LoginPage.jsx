import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { loadStudentData, setAuth } from "../../redux/action/index";
import './LoginPage.css'
import { useDispatch, useSelector} from 'react-redux';
const LoginPage = () => {
  let dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg,setErrMsg]=useState('')
  const navigate = useNavigate();
  const authDetails = useSelector(state=>state.authReducer.data)

  useEffect(()=>{
    axios.get("http://localhost:5800/auth").then(res=>{
      console.log(res)
      dispatch(setAuth(res.data))
      })
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(authDetails)
    authDetails.map(auth=>{
        if(auth.username==username&&auth.password==password){
            navigate("/home")
        }
    })
    setErrMsg("Invalid credentials!!!")

  };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     axios.get("http://localhost:5800/auth").then(res=>setAuthDetails(res.data))
  //   },2000)
  // },[])

  return (
      <div className="login-page ">
        {/* {JSON.stringify(authDetails)} */}
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Login</h2>
      <div>
          <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
      </div>
      <div>
          <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </div>
      <button type="submit" className="btn btn-success mt-3">Login</button>
    {errMsg     &&   <><p className="error">{errMsg}</p></>}
    </form>
    </div>

  );
};

export default LoginPage;