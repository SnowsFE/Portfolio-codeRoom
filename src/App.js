import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage";

import React from "react";
import MainPage from "./pages/MainPage/MainPage.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/info" element={<InfoPage />}></Route>
        <Route path="/users/login" element={<LoginPage />}></Route>
        <Route path="/users/join" element={<JoinPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/boards" element={<WritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
