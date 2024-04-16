import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage.jsx";
import TestConnection from "./pages/server-test-page/ServerTest.jsx";

import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import MyPage from "./pages/MainPage/MyPage.jsx";

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
        <Route path="/MyPage" element={<MyPage />} />
        {/* 서버 연결 테스트 코드 */}
        <Route path="/test" element={<TestConnection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
