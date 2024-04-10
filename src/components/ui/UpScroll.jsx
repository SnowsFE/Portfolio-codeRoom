import React from "react";
import styled from "styled-components";
import UpIcon from "../../img/UpScroll.png";

// 위쪽 스크롤 컴포넌트 정의
const UpScroll = () => {
  // 페이지 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // 페이지 맨 위로 스크롤
      behavior: "smooth", // 부드러운 스크롤 적용
    });
  };

  return (
    // 스크롤 컨테이너
    <IconContainer onClick={scrollToTop}>
      {/* 위로 스크롤 아이콘 이미지 */}
      <IconImage src={UpIcon} alt="UpScroll" />
    </IconContainer>
  );
};

// 스크롤 아이콘 컨테이너 스타일 정의
const IconContainer = styled.div`
  position: fixed; /* 고정 위치 설정 */
  bottom: 20px; /* 아래쪽 여백 20px */
  right: 20px; /* 오른쪽 여백 20px */
  cursor: pointer; /* 커서를 포인터로 변경 */
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-direction: column; /* 세로 방향으로 요소 배치 */
  align-items: center; /* 가운데 정렬 */
`;

// 스크롤 아이콘 이미지 스타일 정의
const IconImage = styled.img`
  width: 75px; /* 너비 75px */
  height: 75px; /* 높이 75px */
  margin-right: 5px; /* 오른쪽 여백 5px */
  margin-bottom: 5px; /* 아래쪽 여백 5px */
`;

export default UpScroll; // 위쪽 스크롤 컴포넌트 내보내기
