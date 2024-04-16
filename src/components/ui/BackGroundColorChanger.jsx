import React, { useRef, useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

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
  background-color: transparent; /* 배경색 투명하게 */
  border: none; /* 테두리 없음 */
  cursor: pointer; /* 커서 포인터로 변경 */
  font-size: 24px; /* 폰트 크기 설정 */
  position: absolute; /* 절대 위치 지정 */
  top: 11px; /* 위쪽 여백 */
  right: 20px; /* 오른쪽 여백 */
  color: white; /* 글자색 흰색 */
  padding: 5px 10px; /* 내부 여백 설정 */
  border-radius: 20px; /* 테두리 둥글게 설정 */
  background: linear-gradient(
    45deg,
    #00ff00,
    #00ff00,
    #2b9900,
    #00ff00,
    #00ff00
  ); /* 그라데이션 배경 */
  background-size: 200% 200%; /* 그라데이션 크기 설정 */
  animation: ${glow} 3s ease infinite; /* 애니메이션 적용 */
  z-index: 100; /* z-index 설정 */
`;

// 색상 선택기 스타일 정의
const HiddenColorPicker = styled.input`
  opacity: 0; /* 투명도 0으로 숨김 */
  position: absolute; /* 절대 위치 지정 */
  top: 50px; /* 상단 여백 */
  right: 20px; /* 우측 여백 */
  width: 1px; /* 너비 1px */
  height: 1px; /* 높이 1px */
  overflow: hidden; /* 넘치는 내용 숨김 */
  z-index: -1; /* z-index 설정 */
`;

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease; /* 배경색 전환 효과 설정 */
    background-color: ${(props) =>
      props.backgroundColor || "#ffffff"}; /* 배경색 설정 */
  }
`;

// 배경색 변경 컴포넌트
const BackGroundColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // 배경색 상태 관리
  const [buttonEmoji, setButtonEmoji] = useState("🏡"); // 버튼 이모지 상태 관리
  const colorPickerRef = useRef(null); // 색상 선택기에 대한 참조 생성

  // 색상 선택기 열기 함수
  const handleGlassesClick = () => {
    colorPickerRef.current.click();
  };

  // 배경색 변경 시 호출되는 함수
  const handleChangeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value); // 배경색 업데이트
    setButtonEmoji("👓"); // 버튼 이모지를 "👓"로 변경
  };

  return (
    <>
      {/* 전역 스타일 적용 */}
      <GlobalStyle backgroundColor={backgroundColor} />
      {/* 숨겨진 색상 선택기 */}
      <HiddenColorPicker
        type="color"
        ref={colorPickerRef}
        onChange={handleChangeBackgroundColor}
      />
      {/* 배경색 변경 버튼 */}
      <Button onClick={handleGlassesClick}>{buttonEmoji}</Button>
    </>
  );
};

export default BackGroundColorChanger;
