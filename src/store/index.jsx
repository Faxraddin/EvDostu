import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import forumReducer from "./forumReducer";
import aboutReducer from "./aboutReducer";

const rootReducer = combineReducers({
    user:userReducer,
    profile:profileReducer,
    forum:forumReducer,
    about:aboutReducer,
});
  
export const store = configureStore({
    reducer: rootReducer,
});
  