import axios from "axios";

export const studentReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_STUDENT":
            console.log(action.type);
            console.log(action.payload);
            return action.payload;
        case "DELETE_STUDENT":
            console.log(action.type);
            console.log(action.payload);
            axios.delete("http://localhost:5800/student/" + action.payload);
            var newState = state.filter((student) => student._id !== action.payload);
            console.log(newState);
            return newState;
        case "ADD_STUDENT":
            console.log(action.type);
            console.log(action.payload);
            // axios.post("http://localhost:5800/student", action.payload);
            // return [action.payload, ...state];
            return state
        case "UPDATE_STUDENT":
            console.log(action.type);
            console.log(action.payload);
            axios.put("http://localhost:5800/student/" + action.payload.id, action.payload.data);
            newState = state.map(student => {
                if (student._id == action.payload.id) {
                    return { _id: action.payload.id, ...action.payload.data }
                } else {
                    return student
                }
            })
            return newState;
        case "REGISTER_STUDENT":
            console.log(action.type);
            console.log(action.payload);
            let formData = new FormData()
            axios.post("http://localhost:5800/student/register", action.payload[0]).then(res => {
                console.log(res.data._id)
                formData.append('file', action.payload[1], res.data._id+'.png')
                // set authentication 
                axios.post("http://localhost:5800/auth",{username:res.data.username,
                    password:res.data.password,
                    role:"student"})
                // upload image 
                axios.post("http://localhost:5800/student/uploadImage/" + res.data._id, formData).then(res =>
                    console.log("image uploaded successfully !!!"))
            })
            return state
        default:
            console.log("UNKNOWN ACTION_TYPE");
            return state;
    }
};
