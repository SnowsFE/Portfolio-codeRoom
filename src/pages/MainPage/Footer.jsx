import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";
import MainStyle from "../../constants/MainStyle.jsx";

const Footer = () => {
  return (
    <FooterStyle>
      <img src={CodeRoomBanner} alt="CodeRoom Logo" />
      <p>© 2024 CodeRoom. All rights reserved.</p>
      <LinkContainer>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>서비스소개</span>
        <span>광고상품 소개</span>
      </LinkContainer>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: ${MainStyle.width};
  height: 175px;
  background-color: #f5f5f5;
  padding: 0px;

  img {
    margin-top: 2.7%;
    margin-right: 40%;
    max-width: 100px;
    height: auto;
  }

  p {
    margin-right: 40%;
    color: #333;
    margin-top: 10px;
    font-weight: 600;
  }
`;

const LinkContainer = styled.div`
  font-size: 14px;
  margin-top: -67px;
  margin-left: 33%;

  span {
    margin-right: 5%; // 각 항목 사이의 간격을 5%로 설정
    font-weight: 700;

    &:last-child {
      margin-right: 0; // 마지막 항목은 오른쪽 여백이 없도록 설정
    }
  }
`;

export default Footer;
