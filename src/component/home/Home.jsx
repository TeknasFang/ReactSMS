import React, { useState } from "react";
import "./Home.css";
import AddStudent from "./student/AddStudent";
import StudentData from "./student/StudentData";
import Sidebar from "./homeUI/Sidebar";
import Navbar from "./homeUI/Navbar";
import Panel from "./homeUI/Panel";

const Home = () => {
  const [changes, setChanges] = useState(0);
  console.log("home");

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
