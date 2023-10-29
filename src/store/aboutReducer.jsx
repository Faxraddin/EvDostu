import { createSlice } from "@reduxjs/toolkit";

const aboutReducer = createSlice({
    name:'about',
    initialState:{
        price:'',
        rooms:'',
        address:''
    },
    reducers:{
        setPrice:(state,action) => {
            state.price = action.payload;
        },
        setRooms:(state,action) => {
            state.rooms = action.payload;
        },
        setAddress:(state,action) => {
            state.address = action.payload;
        }
    }
})

export default aboutReducer.reducer;
export const {setPrice,setAddress,setRooms} = aboutReducer.actions;