let initialState=[{id:'',username:'',password:''}]

export const currentUserInfoReducer = (state={},action)=>{
    switch(action.type){
        case "SET_CURRENT_USER":
            console.log(action.type)
            console.log(action.payload)
            return {...action.payload}
            default: 
            return state
    }

}