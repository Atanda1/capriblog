import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Preview from "./Preview.jsx";
import PostItem from "./PostItem.island";

export function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/post/:id" element={<PostItem />} />
      </Routes>
    </Suspense>
  );
}
