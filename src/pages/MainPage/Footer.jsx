import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";

const Footer = () => {
  return (
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

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1280px;
  min-height: 15vh;
  background-color: #f5f5f5;
  padding: 20px 0; /* 상단과 하단에 패딩 추가 */
  margin-top: 6%;
`;

const Content = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around; /* 내용을 공간에 맞게 분산시킴 */
  flex-wrap: wrap; /* 내용이 넘칠 경우 다음 줄로 이동 */
  width: 80%;
  max-width: 1200px; /* 최대 너비 설정 */
`;

const LogoContainer = styled.div`
  flex: 1;
  img {
    max-width: 100px;
    height: auto;
  }
`;

const Text = styled.p`
  color: #333;
  font-weight: 600;
  flex: 2; /* 로고보다 더 많은 공간을 차지하도록 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const LinkContainer = styled.div`
  display: flex;
  flex: 3; /* 나머지 항목들보다 더 많은 공간을 차지하도록 설정 */
  justify-content: center; /* 내용을 중앙 정렬 */
  font-size: 12px;

  span {
    margin: 0 10px; /* 좌우 여백 설정 */
    font-weight: 700;
  }
`;

export default Footer;
