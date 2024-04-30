import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <FooterLogoContainer>
          <img src={CodeRoomBanner} alt="CodeRoom Logo" />
          <p>© 2024 CodeRoom. All rights reserved.</p>{" "}
          {/* 저작권 텍스트 추가 */}
        </FooterLogoContainer>
        <FooterLinkContainer>
          <FooterLink to="/Info">
            <span>코드룸 소개</span>
          </FooterLink>
          <FooterLink to="/MyPage">
            <span>이용약관</span>
          </FooterLink>
          <FooterLink to="/privacy">
            <span>개인정보처리 방침</span>
          </FooterLink>
        </FooterLinkContainer>
      </FooterContent>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1280px;
  min-height: 15vh;
  background-color: #f5f5f5;
  padding: 20px 0;
  margin-top: 6%;
`;

// 컨텐츠 영역의 스타일 정의
const FooterContent = styled.footer`
  display: flex; /* 플렉스 컨테이너 */
  align-items: center; /* 수직 정렬 */
  justify-content: space-between; /* 간격을 동일하게 분산 */
  flex-wrap: wrap; /* 넘치는 컨텐츠를 다음 줄로 이동 */
  width: 80%; /* 너비 80% */
  max-width: 1200px; /* 최대 너비 1200px */
`;

// 로고 컨테이너 및 저작권 텍스트의 스타일 정의
const FooterLogoContainer = styled.div`
  flex: 1; /* 비율 1:1로 설정 */
  text-align: center; /* 가운데 정렬 */
  img {
    max-width: 100px; /* 최대 너비 100px */
    height: auto; /* 높이 자동 설정 */
  }
  p {
    font-size: 13px; /* 폰트 크기 13px */
    color: #333; /* 글자색 설정 */
    margin-top: 8px; /* 이미지와의 상단 여백 설정 */
  }
`;

// 링크 컨테이너 스타일 정의
const FooterLinkContainer = styled.div`
  display: flex; /* 플렉스 컨테이너 */
  flex: 1; /* 비율 3:1로 설정 */
  justify-content: center; /* 가운데 정렬 */
  font-size: 12px; /* 폰트 크기 12px */

  span {
    margin: 0 10px; /* 좌우 여백 0px 10px */
    font-weight: 700; /* 폰트 굵기 설정 */
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none; /* 링크 밑줄 제거 */
  color: black; /* 글자색을 검은색으로 설정 */
`;
export default Footer;
