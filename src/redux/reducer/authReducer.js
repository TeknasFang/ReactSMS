let initialState=[{id:'',username:'',password:''}]

export const authReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "SET_AUTH":
            console.log(action.type);
            console.log(action.payload);
        return action.payload
          break;
        case "decrement":
          
          break;
        default:
          return state;
      }
}