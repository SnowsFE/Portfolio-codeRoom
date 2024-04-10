import React from "react";
import MainStyle from "../../constants/MainStyle.jsx"; // 메인 페이지 스타일 컴포넌트 불러오기
import Nav from "../../components/ui/Nav.jsx"; // 네비게이션 컴포넌트 불러오기
import Banner from "./Banner.jsx"; // 배너 컴포넌트 불러오기
import HotBoards from "./HotBoards.jsx"; // 인기 게시물 컴포넌트 불러오기
import NewBoards from "./NewBoards.jsx"; // 신규 게시물 컴포넌트 불러오기
import Footer from "./Footer"; // 푸터 컴포넌트 불러오기
import UpScroll from "../../components/ui/UpScroll.jsx"; // 위쪽 스크롤 컴포넌트 불러오기

// 메인 페이지 컴포넌트 정의
const MainPage = () => {
  return (
    // 메인 페이지 스타일을 적용한 컨테이너
    <MainStyle className="MainPage">
      {/* 네비게이션 바 */}
      <Nav />
      {/* 배너 */}
      <Banner />
      {/* 인기 게시물 */}
      <HotBoards />
      {/* 신규 게시물 */}
      <NewBoards />
      {/* 푸터 */}
      <Footer />
      {/* 위쪽 스크롤 버튼 */}
      <UpScroll />
    </MainStyle>
  );
};

export default MainPage; // 메인 페이지 컴포넌트 내보내기
