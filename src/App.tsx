import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/blog/containers/BlogDetail";

const BlogsList = lazy(() => import("./pages/blog/containers/BlogList"));
const BlogsCreate = lazy(() => import("./pages/blog/containers/BlogCreate"));

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/blog-list" replace />} />
      <Route
        path="/blog-list"
        index
        element={
          <Suspense fallback={<>...</>}>
            <BlogsList />
          </Suspense>
        }
      />
      <Route
        path="/create-blog"
        element={
          <Suspense fallback={<>...</>}>
            <BlogsCreate />
          </Suspense>
        }
      />
      <Route
        path="/blog-detail/:id"
        element={
          <Suspense fallback={<>...</>}>
            <BlogDetail />
          </Suspense>
        }
      />
      <Route
        path="/edit-blog/:id"
        element={
          <Suspense fallback={<>...</>}>
            <BlogsCreate />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
