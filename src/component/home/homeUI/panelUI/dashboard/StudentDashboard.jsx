import { useSelector } from "react-redux";
import styles from "./studentDashboard.module.css";
const StudentDashboard = () => {
  let currentUserInfo = useSelector((state) => state.currentUserInfoReducer);

  return (
    <div>
      {/* {JSON.stringify(currentUserInfo)} */}
      <div class="profile-card">
        
        <h1>{currentUserInfo.firstName + " " + currentUserInfo.lastName}</h1>
        <p>Student at Saraswati Vidhyalaya</p>
        <ul>
          <li>
            <strong>Email:</strong> {currentUserInfo.email}
          </li>
          <li>
            <strong>DOB:</strong> {currentUserInfo.dob}
          </li>
          <li>
            <strong>Stream:</strong> {currentUserInfo.stream}
          </li>
          <li>
            <strong>Standard:</strong> {currentUserInfo.standard}
          </li>
          <li>
            <strong>Phone:</strong>+91 {currentUserInfo.phone}
          </li>
          <li>
            <strong>Address:</strong> {currentUserInfo.address}
          </li>
          <li>
            <strong>Parent Name:</strong>{" "}
            {currentUserInfo.parentFirstName +
              " " +
              currentUserInfo.parentLastName}
          </li>
          <li>
            <strong>Parent Email:</strong> {currentUserInfo.parentEmail}
          </li>
          <li>
            <strong>Parent Phone:</strong> {currentUserInfo.parentPhone}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
