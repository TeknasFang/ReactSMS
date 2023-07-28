import { combineReducers } from "redux";
import {studentReducer} from './studentReducer';
import { authReducer } from './authReducer';

 export default combineReducers({
    studentReducer:studentReducer,
    authReducer
})





//   export default createRootReducer