import { Blogs, ListResponse, PaginationParams } from "../../models/blog";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface blogsState {
  loading: boolean;
  list: Blogs[];
  pagination: PaginationParams;
}

const initialState: blogsState = {
  loading: false,
  list: [],
  pagination: {
    page: 1,
    offset: 20
  }
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getAllblogList(state, action: PayloadAction) {
      state.loading = true;
    },
    getAllblogListSuccess(state, action: PayloadAction<ListResponse<Blogs>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    getAllblogListError(state) {
      state.loading = false;
    }
  }
});

// Actions
export const BlogActions = blogSlice.actions;

// Selectors
export const blogList = (state: RootState) => state.blog.list;
export const blogLoading = (state: RootState) => state.blog.loading;
// export const blogFilter = (state: RootState) => state.blog.filter;
export const blogPagination = (state: RootState) => state.blog.pagination;

// Reducer
const blogReducer = blogSlice.reducer;
export default blogReducer;
