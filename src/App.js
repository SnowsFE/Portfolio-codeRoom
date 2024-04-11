import { Route, Routes } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage/MainPage.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
