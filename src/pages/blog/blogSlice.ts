import { Blogs } from "../../shared/models/blog";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { BlogResponse } from "../../shared/models/api";
import { AddBlogPayload, GetListPayload } from "../../shared/types/blog.typpe";

interface BlogListState {
  loading: boolean;
  id: number;
  listALL: Blogs[];
  page?: {};
  detail: {};
  addItems: {};
}

const initialState: BlogListState = {
  loading: false,
  listALL: [],
  page: {
    page: 1,
    offset: 20
  },
  addItems: {},
  id: 0,
  detail: {}
};

const blogSlice = createSlice({
  name: "BLOG",
  initialState,
  reducers: {
    // Get All blog list
    getBlogList: (state, action: PayloadAction<GetListPayload>) => {
      state.loading = true;
    },
    getBlogListSuccess: (state, action: PayloadAction<BlogResponse<Blogs>>) => {
      state.listALL = action.payload.data.items;
      state.page = action.payload.pagination;
      state.loading = false;
    },
    getBlogListError: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },

    // Get detail blog
    getBlogDetail: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.id = action.payload;
    },
    getBlogDetailSuccess: (state, action: PayloadAction<{}>) => {
      state.loading = false;
      state.detail = action.payload;
    },
    getBlogDetailError: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },

    // ADD Blog
    addBlog: (state, action: PayloadAction<AddBlogPayload>) => {
      state.loading = true;
      state.addItems = action.payload;
    },
    addBlogSuccess: function (state, action: PayloadAction<{}>) {
      state.loading = false;
    },
    addBlogError(state, action: PayloadAction<string>) {
      state.loading = false;
    },

    // Edit Blog
    editBlog: (state, action: PayloadAction<{ id: number; blog: {} }>) => {
      state.loading = true;
      state.id = action.payload.id;
      state.detail = action.payload.blog;
    },
    editBlogSuccess: function (state, action: PayloadAction<{}>) {
      state.loading = false;
      state.addItems = action.payload;
    },
    editBlogError(state, action: PayloadAction<string>) {
      state.loading = false;
    },

    // Remove Blog
    removeBlog: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.id = action.payload;
    },
    removeBlogSuccess: function (state, action: PayloadAction<string>) {
      state.loading = false;
    },
    removeBlogError(state, action: PayloadAction<string>) {
      state.loading = false;
    }
  }
});

// Actions
export const blogActions = blogSlice.actions;

// Selectors
export const list = (state: RootState) => state.blog.listALL;
export const loading = (state: RootState) => state.blog.loading;
export const blogPagination = (state: RootState) => state.blog.page;
export const detailBlog = (state: RootState) => state.blog.detail;

// Reducer
const blogReducer = blogSlice.reducer;
export default blogReducer;
