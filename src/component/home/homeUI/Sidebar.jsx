import React,{useState} from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
 const [isActive,toggleActive] = useState(false)

  return (
    <div className={`sidebar-container ${isActive?'active':''}`}>    
            <span className='sidebar-icon' onClick={()=>{
                toggleActive(!isActive)
            }}><i className="fa-solid fa-bars"></i></span>
        <div>
            <div className="profile-picture-container">
                <div className="profile-picture">
                  <img src="/images/logo.png" alt="not found" width={70} height={70}/>
                </div>
            </div>
            <div className="sidebar-content mt-5">  
              <p className='parent-content'><i class="fa-solid fa-table-columns"></i><span>Dashboard</span></p>
              <p className='parent-content'><i class="fa-solid fa-graduation-cap"></i><span>Student</span>
              <span className='child-content'>Add student</span>
              <span className='child-content'>Read student</span>
              </p>

            </div>
        </div>
    </div>
  )
}

export default Sidebar