import { all } from "redux-saga/effects";
import watchBlog from "../pages/blog/blogSaga";

export default function* rootSaga() {
  yield all([watchBlog()]);
}
