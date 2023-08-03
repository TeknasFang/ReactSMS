import { DEC, SET_AUTH, INC, L_STD, SET_STUDENT,DELETE_STUDENT, ADD_STUDENT, UPDATE_STUDENT, REGISTER_STUDENT, SET_CURRENT_USER } from "./actionTypes";

export const increment = (num)=>({type:INC,payload:num})
export const decrement = (num)=>({type:DEC,payload:num})
export const loadStudentData = (data)=>({type:L_STD,payload:data})

//authentication related actions
export const setAuth = (data)=>({type:SET_AUTH,payload:data})

//student related actions
export const setStudent = (data)=>({type:SET_STUDENT,payload:data})
export const deleteStudent = (id)=>({type:DELETE_STUDENT,payload:id})
export const addStudent = (data)=>({type:ADD_STUDENT,payload:data})
export const updateStudent = (data)=>({type:UPDATE_STUDENT,payload:{data}})
export const registerStudent = (data)=>({type:REGISTER_STUDENT,payload:data})

//current user related actions
export const setCurrentUser = (data)=>({type:SET_CURRENT_USER,payload:data})



