import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './component/auth/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/home/Home';
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./component/home/homeUI/panelUI/dashboard/Dashboard";
import StudentRegistration from "./component/home/homeUI/panelUI/dashboard/forms/StudentRegistration";
import axios from "axios";
import StudentList from './component/student/StudentList';
import StudentUpdate from "./component/home/homeUI/panelUI/dashboard/forms/StudentUpdate";

function App() {
  // let [base64String,setBase64String] = useState('')
  // useEffect(()=>{
  //     axios.get("http://localhost:5800/student").then(res=>{
      
  //       let imgBuffer = singleData.studentImg.data.data
  //       setBase64String(btoa(String.fromCharCode(...new Uint8Array(imgBuffer))))
  //       setImg(base64String)
  //     }).catch(err=>console.log(err))
  // },[])
  return (

    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path=":role/dashboard" element={<Dashboard />}></Route>
              <Route path=":role/register/student" element={<StudentRegistration/>}></Route>
              <Route path=":role/list/student" element={<StudentList/>}></Route>
              <Route path=":role/update/student/:username" element={<StudentUpdate/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  )
    ;
}

export default App;
