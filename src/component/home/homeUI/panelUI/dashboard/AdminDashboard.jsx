import React,{useEffect} from "react";
import styles from "./Dashboard.module.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setStudent } from "../../../../../redux/action";
const AdminDashboard = () => {
  let dispatch=useDispatch()
  useEffect(()=>{
    axios.get("http://localhost:5800/student").then((res) => {
        dispatch(setStudent(res.data));
      });
  },[])
  return (
    <>
      <h3 style={{textAlign:'center',letterSpacing:'10px',marginBottom:'3rem'}}>ADMIN DASHBOARD</h3>

      <div className={styles.gridContainer}>
      <div className={`${styles.card}`}>
        <a className={styles.card1} >
          <p>Top students</p>
          <p className={styles.small}>Students with great potential. </p>
          <div className={styles.goCorner} href="#">
            <div className={styles.goArrow}>
              <i class="fa-solid fa-trophy"></i>
            </div>
          </div>
        </a>
      </div>
      <div className={`${styles.card}`}>
        <a className={styles.card1} >
          <p>Top students</p>
          <p className={styles.small}>Students with great potential. </p>
          <div className={styles.goCorner} href="#">
            <div className={styles.goArrow}>
              <i class="fa-solid fa-trophy"></i>
            </div>
          </div>
        </a>
      </div>
      
      </div>
      
    </>
  );
};

export default AdminDashboard;