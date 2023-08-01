import React from "react";
import styles from "./Dashboard.module.css";
const AdminDashboard = () => {
  return (
    <>
      <h3>Admin Dashboard</h3>
      <div className={styles.gridContainer}> 
      <div className={`${styles.card} grid-item`}>
        <a className={styles.card1} href="#">
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