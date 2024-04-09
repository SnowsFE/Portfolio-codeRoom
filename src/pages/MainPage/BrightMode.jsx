import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

// 버튼 애니메이션
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

// 버튼 스타일
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 5px;
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
`;

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.isDarkMode ? "#4a5751" : "#ffffff")};
  }
`;

const DarkLightModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // 다크 모드 상태 관리

  // 다크 모드 상태 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Button onClick={toggleDarkMode}>{isDarkMode ? "🕶️" : "👓"}</Button>
    </>
  );
};

export default DarkLightModeButton;
