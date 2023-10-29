import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name:'user',
    initialState:{
        user:'',
        token:'',
        isAuth: localStorage.getItem('isAuth') === 'true',
    },
    reducers:{
        addToken:(state,action) => {
            state.token = localStorage.getItem('token')
        },
        addUser:(state,action) => {
            state.user = localStorage.getItem('user')
        },
        setIsAuth:(state,action) => {
            state.isAuth = action.payload
        },
    },
})

export default userReducer.reducer
export const {addToken,addUser,setIsAuth} = userReducer.actions