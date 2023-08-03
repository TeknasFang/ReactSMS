import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  let currentUserInfo = null;
  currentUserInfo = useSelector((state) => state.currentUserInfoReducer);
  let [base64string, setImgUrl] = useState("");
  
  const arrayBufferToBase64 = ( buffer ) => {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }


  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "rgb(252, 163, 17)" : "rgba(252, 163, 17,0.7)",
    background: "transparent",
    textDecoration: "none",
  });
  const [isActive, toggleActive] = useState(false);
  let params = useParams();
  let role = params.role;
  let imageUrl;
  
  if(role=='student'){
   imageUrl = arrayBufferToBase64(currentUserInfo?.studentImg.data.data)
  }



  return (
    <>
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
          {role == "admin" && (
            <div className="sidebar-content mt-4">
              <div className="profile-picture-container mb-5">
                <div className="profile-picture">
                  <img
                    src="/images/logo.png"
                    width={70}
                    height={70}
                    alt="noe"
                  />
                </div>
              </div>
              <p className="parent-content">
                <NavLink
                  style={navLinkStyle}
                  to="./admin/dashboard"
                >
                  <i class="fa-solid fa-table-columns"></i>
                  Dashboard
                </NavLink>
              </p>
              <p className="parent-content">
                <span>
                  <NavLink style={navLinkStyle} to="/home/admin/list/student">
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
                <span className="child-content">
                  <NavLink style={navLinkStyle} to="/home/admin/update/student">
                    Update Student
                  </NavLink>
                </span>
              </p>
            </div>
          )}
          {role == "student" && ( 
            <div className="sidebar-content mt-4">
              <div className="profile-picture-container mb-5">
          <div className="profile-picture">

            <img
              src={`data:image/png;base64,${imageUrl}`}
              width={70}
              height={70}
              alt="noe"
            />
          </div>
        </div>
              <p className="parent-content">
                <NavLink
                  style={navLinkStyle}
                  to="./student/dashboard"
                >
                  <i class="fa-solid fa-table-columns"></i>
                  Dashboard
                </NavLink>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
