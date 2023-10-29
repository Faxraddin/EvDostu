import { createSlice } from "@reduxjs/toolkit";


const profileReducer = createSlice({
    name: 'profile',
    initialState: {
      about: '',
      age: '',
      region: '',
      work: '',
      interest: '',
    },
    reducers: {
      setAbout: (state, action) => {
        state.about = action.payload;
      },
      setAge: (state, action) => {
        state.age = action.payload;
      },
      setRegion: (state, action) => {
        state.region = action.payload;
      },
      setWork: (state, action) => {
        state.work = action.payload;
      },
      setInterest: (state, action) => {
        state.interest = action.payload;
      },
      clearUserData: (state) => {
        state.about = '';
        state.age = '';
        state.region = '';
        state.work = '';
        state.interest = '';
      },
    },
  });
  
  export default profileReducer.reducer;
  export const {
    setAbout,
    setAge,
    setInterest,
    setWork,
    setRegion,
    clearUserData,
  } = profileReducer.actions;
  