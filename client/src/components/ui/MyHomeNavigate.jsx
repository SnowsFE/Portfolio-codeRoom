import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 배경색 변경 및 모달 컴포넌트
const MyHomeNavigate = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  // 모달 토글 함수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 마이페이지 이동 함수
  const navigateToMyPage = () => {
    navigate("/MyPage");
  };

  return (
    <>
      <GlobalStyle />
      <Button onClick={toggleModal}>🏡</Button>
      {isModalOpen && (
        <UserInfoModal>
          <p style={{ cursor: "pointer" }} onClick={navigateToMyPage}>
            내정보
          </p>
        </UserInfoModal>
      )}
    </>
  );
};

// 버튼 반짝 애니메이션
const glow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// 버튼 스타일 정의
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 11px;
  right: 20px;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  background: linear-gradient(
    45deg,
    #00ff00,
    #00ff00,
    #2b9900,
    #00ff00,
    #00ff00
  );
  background-size: 200% 200%;
  animation: ${glow} 3s ease infinite;
  z-index: 100;
`;

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease;
    background-color: #ffffff;
  }
`;

// 모달 스타일 정의
const UserInfoModal = styled.div`
  position: absolute;
  top: 57px; // 버튼 위치 바로 아래에 나타나도록 설정
  right: 0px;
  width: 100px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px #646464;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101; // 버튼보다 높은 z-index 설정

  :hover {
    color: #14cc14;
  }
`;

export default MyHomeNavigate;
