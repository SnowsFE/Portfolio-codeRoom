import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease;
    background-color: ${(props) =>
      props.isDarkMode
        ? "#282c34"
        : "#ffffff"}; // Dark Mode일 때와 Light Mode일 때의 배경색 설정
  }
`;

// 자체적으로 빛나는 효과를 위한 keyframes 정의
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

// Dark Mode 토글 버튼 스타일 정의
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 20px;
  right: 20px;
  color: white; // 버튼의 텍스트 색상을 설정
  padding: 5px 10px; // 버튼의 패딩 설정
  border-radius: 20px; // 버튼의 모서리를 둥글게
  background: linear-gradient(
    45deg,
    #00ff00,
    #00ff00,
    #2b9900,
    #00ff00,
    #00ff00
  ); // 버튼의 배경 그라데이션 설정
  background-size: 200% 200%; // 배경 크기를 확대하여 애니메이션 효과를 더 부드럽게
  animation: ${glow} 3s ease infinite; // 애니메이션 적용
`;

// BrightMode 컴포넌트 정의
const BrightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode 상태 변경 시 배경색 및 전역 스타일 변경
  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease";
    document.body.style.backgroundColor = isDarkMode ? "#4a5751" : "#ffffff"; // 다크 모드와 라이트 모드에 대한 배경색 설정
  }, [isDarkMode]);

  // Dark Mode 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} /> {/* 전역 스타일 적용 */}
      <Button onClick={toggleDarkMode}>{isDarkMode ? "🕶️" : "👓"}</Button>{" "}
    </>
  );
};

export default BrightMode;
