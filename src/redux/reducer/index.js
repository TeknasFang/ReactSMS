import { combineReducers } from "redux";
import {studentReducer} from './studentReducer';
import { authReducer } from './authReducer';
import { currentUserInfoReducer } from './currentUserInfoReducer';

 export default combineReducers({
    studentReducer:studentReducer,
    currentUserInfoReducer,
    authReducer,
})





//   export default createRootReducer