import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { blogActions } from "./blogSlice";
import blogApi from "../../shared/services/blogApi";
import { BlogResponse } from "../../shared/models/api";
import { Blogs } from "../../shared/models/blog";
import { AddBlogPayload, GetListPayload } from "../../shared/types/blog.typpe";

function* getBlogList(action: PayloadAction<GetListPayload>) {
  try {
    const res: BlogResponse<Blogs> = yield call(blogApi.getAll, action.payload);
    console.log(res);
    yield put(blogActions.getBlogListSuccess(res));
  } catch (error) {
    yield put(blogActions.getBlogListError("Failed to get blog list"));
  }
}

function* getBlogDetail(action: PayloadAction<number>) {
  try {
    const res: { data: Blogs } = yield call(blogApi.getById, action.payload);
    yield put(blogActions.getBlogDetailSuccess(res.data));
  } catch (error) {
    yield put(blogActions.getBlogDetailError("Failed t  o get blog detail"));
  }
}

function* addBlog(action: PayloadAction<AddBlogPayload>) {
  console.log(action.payload);
  try {
    const res: {} = yield call(blogApi.addItem, action.payload);
    yield put(blogActions.addBlogSuccess(res));
  } catch (error) {
    yield put(blogActions.addBlogError("Failed to create blog"));
  }
}

function* removeBlog(action: PayloadAction<number>) {
  try {
    const res: string = yield call(blogApi.removeItem, action.payload);
    console.log(res);
    yield put(blogActions.removeBlogSuccess(res));
  } catch (error) {
    yield put(blogActions.removeBlogError("Failed to remove blog"));
  }
}

function* editBlog(action: PayloadAction<{ id: number; blog: {} }>) {
  try {
    const res: {} = yield call(blogApi.editItem, action.payload.id, { blog: action.payload.blog });
    console.log(res);
    yield put(blogActions.editBlogSuccess(res));
  } catch (error) {
    yield put(blogActions.editBlogError("Failed to edit blog"));
  }
}

export default function* watchBlog() {
  yield takeLatest(blogActions.getBlogList, getBlogList);
  yield takeLatest(blogActions.getBlogDetail, getBlogDetail);
  yield takeLatest(blogActions.addBlog, addBlog);
  yield takeLatest(blogActions.removeBlog, removeBlog);
  yield takeLatest(blogActions.editBlog, editBlog);
}
