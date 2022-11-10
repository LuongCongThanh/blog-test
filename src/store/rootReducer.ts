import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "../pages/blog/blogSlice";

export const rootReducer = combineReducers({
  blog: blogReducer
});
