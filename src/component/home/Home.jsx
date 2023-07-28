import React,{ useState, useEffect }  from "react";
import "./Home.css";
import AddStudent from "./student/AddStudent";
import StudentData from "./student/StudentData";
import axios from "axios";
import { loadStudentData } from "../../redux/action";

const Home = () => {
  const [changes, setChanges] = useState(0);
  console.log("home")
  
  return (
    <>
      <div className="home">
        <AddStudent setChanges={setChanges} />
        <StudentData changes={changes} setChanges={setChanges} />
      </div>
    </>
  );
};

export default Home;
