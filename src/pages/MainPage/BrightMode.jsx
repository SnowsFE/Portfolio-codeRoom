import React, { useRef, useState } from "react";
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
  top: 5px; // 버튼을 색상 선택기 바로 아래로 이동
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

// 색상 선택기 스타일
const HiddenColorPicker = styled.input`
  opacity: 0;
  position: absolute;
  top: 5px; // 원래 버튼 위치에 색상 선택기를 배치
  right: 20px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -1;
`;

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease;
    background-color: ${(props) => props.backgroundColor || "#ffffff"};
  }
`;

const BrightMode = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [buttonEmoji, setButtonEmoji] = useState("🎨"); // 버튼 이모지 상태 관리
  const colorPickerRef = useRef(null);

  const handleGlassesClick = () => {
    colorPickerRef.current.click();
  };

  const handleChangeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
    setButtonEmoji("👓"); // 배경색이 변경되면 버튼 이모지를 로 변경
  };

  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      <HiddenColorPicker
        type="color"
        ref={colorPickerRef}
        onChange={handleChangeBackgroundColor}
      />
      <Button onClick={handleGlassesClick}>{buttonEmoji}</Button>
    </>
  );
};

export default BrightMode;
