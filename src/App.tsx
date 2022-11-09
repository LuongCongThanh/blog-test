import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const BlogsList = lazy(() => import("./pages/blog/containers/BlogList"));
const BlogsCreate = lazy(() => import("./pages/blog/containers/BlogCreate"));

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route index element={<BlogsList />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<>...</>}>
              <BlogsCreate />
            </Suspense>
          }
        />
        {/*<Route*/}
        {/*  path="cccc"*/}
        {/*  element={*/}
        {/*    <React.Suspense fallback={<>...</>}>*/}
        {/*      <aaaaaa />*/}
        {/*    </React.Suspense>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route path="*" element={<vvvvv />} />*/}
      </Routes>
    </div>
  );
};

export default App;
