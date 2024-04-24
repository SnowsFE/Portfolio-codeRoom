import React from "react";
import MainStyle from "../../constants/MainStyle.jsx";
import Nav from "../../components/ui/Nav.jsx";
import LoginNav from "../../components/ui/LoginNav.jsx";
import Banner from "./Banner.jsx";
import HotBoards from "./HotBoards.jsx";
import NewBoards from "./NewBoards.jsx";
import Footer from "./Footer.jsx";
import UpScroll from "../../components/ui/UpScroll.jsx";

const MainPage = () => {
  // username 있는지 확인
  const username = sessionStorage.getItem("username");

  // 로그인이 된 사용자면 로그아웃이 UI를 포함한 Nav 를 보여준다
  if (username) {
    return (
      <>
        <LoginNav />
        <MainStyle className="MainPage">
          <Banner />
          <HotBoards />
          <NewBoards />
          <Footer />
          <UpScroll />
        </MainStyle>
      </>
    );
  }

  // 로그인이 되지 않은 사용자면 로그인이 UI를 포함한 Nav 를 보여준다
  return (
    <>
      <Nav />
      <MainStyle className="MainPage">
        <Banner />
        <HotBoards />
        <NewBoards />
        <Footer />
        <UpScroll />
      </MainStyle>
    </>
  );
};

export default MainPage;
