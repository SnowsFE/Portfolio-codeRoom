<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import DetailPage from "./pages/detailpage/DetailPage";
import WritePage from "./pages/writepage/WritePage";

=======
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
>>>>>>> NewDoHyeon
import "./App.css";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<InfoPage />}></Route>
        <Route path="/users/login" element={<LoginPage />}></Route>
        <Route path="/users/join" element={<JoinPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/boards" element={<WritePage />}></Route>
      </Routes>
=======
      <Router>
        <MainPage />
      </Router>
>>>>>>> NewDoHyeon
    </div>
  );
}

export default App;
