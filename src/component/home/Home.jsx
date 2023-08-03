import React, { useState,useEffect } from "react";
import "./Home.css";
import axios from "axios";
import AddStudent from "./student/AddStudent";
import StudentData from "./student/StudentData";
import Sidebar from "./homeUI/Sidebar";
import Navbar from "./homeUI/Navbar";
import Panel from "./homeUI/Panel";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "../../redux/action";
const Home = () => {
  let dispatch = useDispatch()
  const [changes, setChanges] = useState(0);
  console.log("home current user : ");
  useEffect(()=>{
    axios.get("http://localhost:5800/student").then((res) => {
        dispatch(setStudent(res.data));
      });
  },[])


  return (
    <>
      <div className="home">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 sidebar">
            <Sidebar />  
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9">
            <div>
            <Navbar/>
            <Panel/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
