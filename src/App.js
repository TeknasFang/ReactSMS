import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './component/auth/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/home/Home';
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./component/home/homeUI/panelUI/dashboard/Dashboard";
import StudentRegistration from "./component/home/homeUI/panelUI/dashboard/forms/StudentRegistration";

function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path=":role/dashboard" element={<Dashboard />}></Route>
              <Route path="admin/register/student" element={<StudentRegistration/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  )
    ;
}

export default App;
