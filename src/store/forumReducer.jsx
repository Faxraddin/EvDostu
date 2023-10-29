import { createSlice } from "@reduxjs/toolkit";

const forumReducer = createSlice({
    name:'forum',
    initialState:{
        unvan:''
    },
    reducers:{
        setUnvan:(state,action) => {
            state.unvan = action.payload
        }
    }
})

export default forumReducer.reducer;
export const {setUnvan} = forumReducer.actions;