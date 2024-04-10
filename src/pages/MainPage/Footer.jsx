import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";

// Footer 컴포넌트 정의
const Footer = () => {
  return (
    // FooterStyle 컴포넌트로 스타일 적용
    <FooterStyle>
      <Content>
        <LogoContainer>
          <img src={CodeRoomBanner} alt="CodeRoom Logo" />
        </LogoContainer>
        <Text>© 2024 CodeRoom. All rights reserved.</Text>
        <LinkContainer>
          <span>코드룸 소개</span>
          <span>이용약관</span>
          <span>개인정보처리 방침</span>
        </LinkContainer>
      </Content>
    </FooterStyle>
  );
};

// Footer 컴포넌트의 스타일 정의
const FooterStyle = styled.div`
  display: flex;
  justify-content: center; /* 수평 정렬 */
  align-items: center; /* 수직 정렬 */
  width: 100%; /* 가로 폭 100% */
  min-width: 1280px; /* 최소 가로 폭 1280px */
  min-height: 15vh; /* 최소 높이 15vh */
  background-color: #f5f5f5; /* 배경색 설정 */
  padding: 20px 0; /* 상단과 하단에 20px의 패딩 추가 */
  margin-top: 6%; /* 상단 여백 6% 설정 */
`;

// 컨텐츠 영역의 스타일 정의
const Content = styled.footer`
  display: flex; /* 플렉스 컨테이너 */
  align-items: center; /* 수직 정렬 */
  justify-content: space-around; /* 간격을 동일하게 분산 */
  flex-wrap: wrap; /* 넘치는 컨텐츠를 다음 줄로 이동 */
  width: 80%; /* 너비 80% */
  max-width: 1200px; /* 최대 너비 1200px */
`;

// 로고 컨테이너의 스타일 정의
const LogoContainer = styled.div`
  flex: 1; /* 비율 1:1로 설정 */
  img {
    max-width: 100px; /* 최대 너비 100px */
    height: auto; /* 높이 자동 설정 */
  }
`;

// 텍스트 스타일 정의
const Text = styled.p`
  color: #333; /* 글자색 설정 */
  font-weight: 600; /* 폰트 굵기 설정 */
  flex: 2; /* 비율 2:1로 설정 */
  text-align: center; /* 가운데 정렬 */
`;

// 링크 컨테이너 스타일 정의
const LinkContainer = styled.div`
  display: flex; /* 플렉스 컨테이너 */
  flex: 3; /* 비율 3:1로 설정 */
  justify-content: center; /* 가운데 정렬 */
  font-size: 12px; /* 폰트 크기 12px */

  span {
    margin: 0 10px; /* 좌우 여백 0px 10px */
    font-weight: 700; /* 폰트 굵기 설정 */
  }
`;

// Footer 컴포넌트 내보내기
export default Footer;
