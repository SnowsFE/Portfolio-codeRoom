import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoomBanner.png";

// 배너 컴포넌트 정의
const Banner = () => {
  return (
    <BanStyle className="banner">
      {/* 이미지 엘리먼트 */}
      <img src={CodeRoomBanner}></img>
    </BanStyle>
  );
};

// 스타일드 컴포넌트를 사용하여 배너 스타일 정의
const BanStyle = styled.div`
  width: 1300px; /* 너비 설정 */
  height: 335px; /* 높이 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex; /* 플렉스 박스로 설정 */
  justify-content: center; /* 가로 방향으로 중앙 정렬합니다. */
  align-items: center; /* 세로 방향으로 중앙 정렬합니다. */
  border-radius: 15px; /* 테두리 반경 설정 */
  overflow: hidden; /* 내부 내용이 넘칠 경우 숨김 처리 */
`;

export default Banner; // 배너 컴포넌트 내보내기
