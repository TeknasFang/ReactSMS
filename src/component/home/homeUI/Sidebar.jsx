import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink, useParams } from "react-router-dom";
const Sidebar = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "white" : "black",
    background:"transparent",
    textDecoration:'none'
  })
  const [isActive, toggleActive] = useState(false);
  let params = useParams();
  let role = params.role;
  console.log("sidebar rendered ");
  return (
    <div className={`sidebar-container ${isActive ? "active" : ""}`}>
      <span
        className="sidebar-icon"
        onClick={() => {
          toggleActive(!isActive);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </span>
      <div>
        <div className="profile-picture-container">
          <div className="profile-picture">
            <img
              src="/images/logo.png"
              alt="not found"
              width={70}
              height={70}
            />
          </div>
        </div>
        {role == "admin" && (
          <div className="sidebar-content mt-5">
            <p className="parent-content">
              
              <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    background:"transparent",
                    textDecoration:'none'
                  })}
                  to="./admin/dashboard"
                ><i class="fa-solid fa-table-columns"></i>
                  Dashboard
                </NavLink>
            </p>
            <p className="parent-content">
              <span>
                <NavLink
                  style={navLinkStyle}
                  to="/home/admin/list/student"
                >
              <i class="fa-solid fa-graduation-cap"></i>
                  Student
                </NavLink>
              </span>
              <span className="child-content">
                <NavLink
                  style={navLinkStyle}
                  to="/home/admin/register/student"
                >
                  Add Student
                </NavLink>
              </span>
              <span className="child-content">Read student</span>
            </p>
          </div>
        )}
        {role == "student" && (
          <div className="sidebar-content mt-5">
            <p className="parent-content">
              <i class="fa-solid fa-table-columns"></i>
              <span>Dashboard</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
