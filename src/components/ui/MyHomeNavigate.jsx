import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
// useHistory 대신 useNavigate import
import { useNavigate } from "react-router-dom";

// 버튼 반짝임 애니메이션
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

// 배경색 변경 컴포넌트
const MyHomeNavigate = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 버튼 클릭 시 "/MyPage"로 이동하는 함수
  const handleButtonClick = () => {
    navigate("/MyPage");
  };

  return (
    <>
      <GlobalStyle />
      <Button onClick={handleButtonClick}>🏡</Button>
    </>
  );
};

export default MyHomeNavigate;
