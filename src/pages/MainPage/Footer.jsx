import React from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/CodeRoom.png";
import MainStyle from "../../constants/MainStyle.jsx";

const Footer = () => {
  return (
    <FooterStyle>
      <img src={CodeRoomBanner} alt="CodeRoom Logo" />
      <p>© 2024 CodeRoom. All rights reserved.</p>
      <h1>이용약관 개인정보처리방침 서비스소개 광고상품 소개</h1>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: ${MainStyle.width};
  height: 175px;
  background-color: #f1f1f1;
  padding: 10px;

  img {
    margin-top: 2.7%;
    margin-right: 50%;
    max-width: 100px;
    height: auto;
  }

  p {
    margin-right: 50%;
    color: #333;
    margin-top: 10px;
    font-weight: 600;
  }

  h1 {
    font-size: 14px;
    margin-top: -60px;
    margin-left: 25%;
  }
`;

export default Footer;
