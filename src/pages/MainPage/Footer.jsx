import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";

// Footer 컴포넌트 정의
const Footer = () => {
  return (
    <FooterStyle>
      <Footers>
        {/* CodeRoom 로고 이미지 */}
        <img src={CodeRoomBanner} alt="CodeRoom Logo" />
        {/* 저작권 정보 */}
        <p>© 2024 CodeRoom. All rights reserved.</p>
        {/* 링크 컨테이너 */}
        <LinkContainer>
          <span>코드룸 소개</span>
          <span>이용약관</span>
          <span>개인정보처리 방침</span>
        </LinkContainer>
      </Footers>
    </FooterStyle>
  );
};

// 스타일드 컴포넌트를 사용하여 Footer 스타일 정의
const FooterStyle = styled.div`
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  min-width: 1300px; /* 최소 너비를 1300px로 설정하여 작은 화면에서도 확대되지 않도록 함 */
  justify-content: center; /* 가로 방향으로 중앙 정렬 */
  align-items: center; /* 세로 방향으로 중앙 정렬 */
  margin: 0 auto; /* 가운데 정렬 */
  min-height: 40vh; /* 최소 높이를 화면의 30%로 설정 */
  position: relative; /* 상대 위치 지정 */
`;

// Footer 내용 스타일 정의
const Footers = styled.footer`
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  height: 170px; /* 높이 설정 */
  background-color: #f5f5f5; /* 배경색 설정 */
  position: absolute; /* 절대 위치 지정 */
  bottom: 0;
  margin: 0 auto; /* 가운데 정렬 */

  img {
    margin-top: 2.3%; /* 상단 여백 */
    margin-left: -28.5%; /* 왼쪽 여백 */
    max-width: 100px; /* 최대 너비 설정 */
    height: auto; /* 높이 자동 조정 */
    position: absolute; /* 절대 위치 지정 */
  }

  p {
    margin-left: 22%; /* 왼쪽 여백 */
    color: #333; /* 글자색 설정 */
    margin-top: 5.9%; /* 상단 여백 */
    font-weight: 600; /* 글자 두께 설정 */
    position: absolute; /* 절대 위치 지정 */
  }
`;

// 링크 컨테이너 스타일 정의
const LinkContainer = styled.div`
  width: 500px; /* 박스 넓이 설정 */
  font-size: 12px; /* 글자 크기 설정 */
  margin-top: 4.5%; /* 상단 여백 */
  margin-left: 55%; /* 왼쪽 여백 */
  position: absolute; /* 절대 위치 지정 */

  span {
    margin-right: 5%; /* 오른쪽 여백 설정 */
    font-weight: 700; /* 글자 두께 설정 */

    &:last-child {
      margin-right: 0; /* 마지막 항목은 오른쪽 여백 없도록 설정 */
    }
  }
`;

export default Footer; // Footer 컴포넌트 내보내기
