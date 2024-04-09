import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.isDarkMode ? "#282c34" : "white")};
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

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 20px;
  right: 20px;
  color: white; // 버튼의 텍스트 색상을 설정
  padding: 10px 20px; // 버튼의 패딩 설정
  border-radius: 20px; // 버튼의 모서리를 둥글게
  background: linear-gradient(
    45deg,
    #00ff00,
    #00ff00,
    #009900,
    #00ff00,
    #00ff00
  );
  background-size: 200% 200%; // 배경 크기를 확대하여 애니메이션 효과를 더 부드럽게
  animation: ${glow} 3s ease infinite; // 애니메이션 적용
`;

const BrightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease";
    document.body.style.backgroundColor = isDarkMode ? "#282c34" : "white";
  }, [isDarkMode]);

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

export default BrightMode;
