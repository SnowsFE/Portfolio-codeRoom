import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage.jsx";
import UpdatePage from "./pages/updatepage/UpdatePage.jsx";
import TestConnection from "./pages/server-test-page/ServerTest.jsx";
import UpdatePasswordPage from "./pages/updatepage/UpdatePasswordPage.jsx";
import UserDeletePage from "./pages/updatepage/UserDeletePage.jsx";
import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/info" element={<InfoPage />}></Route>
        <Route path="/users/login" element={<LoginPage />}></Route>
        <Route path="/users/join" element={<JoinPage />}></Route>
        <Route path="/users/update" element={<UpdatePasswordPage />}></Route>
        <Route path="/users/delete" element={<UserDeletePage />}></Route>
        <Route path="/boards/:id" element={<DetailPage />}></Route>
        <Route path="/boards/write" element={<WritePage />}></Route>
        {/* navigator(`/boards?boardId=${boardId}/update`); */}
        <Route path="/boards/:id/update" element={<UpdatePage />}></Route>
        <Route path="/MyPage" element={<MyPage />} />
        {/* 서버 연결 테스트 */}
        <Route path="/test" element={<TestConnection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
