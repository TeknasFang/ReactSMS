import { DEC, SET_AUTH, INC, LOAD_STD, L_STD, SET_STUDENT,DELETE_STUDENT, ADD_STUDENT, UPDATE_STUDENT } from "./actionTypes";

export const increment = (num)=>({type:INC,payload:num})
export const decrement = (num)=>({type:DEC,payload:num})
export const loadStudentData = (data)=>({type:L_STD,payload:data})

//authentication related actions
export const setAuth = (data)=>({type:SET_AUTH,payload:data})

//student related actionss
export const setStudent = (data)=>({type:SET_STUDENT,payload:data})
export const deleteStudent = (id)=>({type:DELETE_STUDENT,payload:id})
export const addStudent = (data)=>({type:ADD_STUDENT,payload:data})
export const updateStudent = (id,data)=>({type:UPDATE_STUDENT,payload:{id,data}})

