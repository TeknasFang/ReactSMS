import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  setAuth, setCurrentUser } from "../../redux/action/index";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  let dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const authDetails = useSelector((state) => state.authReducer.data);

  useEffect(() => {
    axios.get("http://localhost:5800/auth").then((res) => {
      console.log(res.data.data);
      dispatch(setAuth(res.data));
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    authDetails.map((auth) => {
      if (auth.username == data.username && auth.password == data.password) {
        let role = auth.role
        if(role=='admin'){
            console.log("role is admin")
            axios.get("http://localhost:5800/auth/"+auth.username).then((res) => {
              console.log("current user : ");
              console.log(res.data.data)
              let userInfo = res.data.data
              dispatch(setCurrentUser(userInfo))
              // dispatch(setAuth(res.data));
            });
        }else if(role=='student'){
          console.log("role is student")
          axios.get("http://localhost:5800/student/"+auth.username).then((res) => {
            console.log("current user : ");
            let userInfo = res.data.data
            dispatch(setCurrentUser(userInfo))

            // dispatch(setAuth(res.data));
          });
        }
        navigate('/home/'+role+'/dashboard')
      }
    });
    setErrMsg("Invalid credentials!!!");
  };

  return (
    <div className="login-page ">
      {JSON.stringify(authDetails)}
      {/* <img className="logo" src="/images/logo.png" alt="not_found" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mx-5">L O G I N </h2>
      <div className="input-container">

        <input
          className={errors.username && "invalid"}
          placeholder="username"
          {...register("username", { required: true, minLength: 4 })}
          />
        {errors.username?.type === "required" && (
          <span className="">Username is a required field</span>
          )}
        {errors.username?.type === "minLength" && (
          <span>Username must be 4 characters long</span>
          )}
          </div>
      <div className="input-container">


        <input
          className={errors.password && "invalid"}
          placeholder="password"
          {...register("password", { required: true, minLength: 4 })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password?.type === "required" && (
          <span>Password is a required field</span>
          )}
        {errors.password?.type === "minLength" && (
          <span>Password must be 4 characters long  </span>
          )}
          </div>
          <div className="submit-container">
        <button type="submit" >L O G I N </button>
          </div>
    {errMsg     &&   <><p className="error">{errMsg}</p></>}
      </form>
    </div>
  );
};

export default LoginPage;
