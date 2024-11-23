import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import UpdatePage from "./UpdatePage";
import CreatePage from "./CreatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
