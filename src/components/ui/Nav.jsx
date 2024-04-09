import React from "react";
import styled from "styled-components";
import CodeRoom from "../../img/CodeRoom.png";
import BackGroundColorChanger from "./BackGroundColorChanger";

const Nav = (props) => {
  return (
    <NaviBox>
      <NavStyle className="Logo">
        <Left>
          <a href="/">
            <img src={CodeRoom} alt="로고" />
            {props.container}
          </a>
        </Left>
        <Right1>
          <a href="/boards">
            <span>{props.container} 글쓰기</span>
          </a>
        </Right1>
        <Right2>
          <a href="/users/login">
            <span>{props.container} 로그인</span>
          </a>
        </Right2>
        <Separator />
        <BackGroundColorChanger />
      </NavStyle>
    </NaviBox>
  );
};

const NaviBox = styled.div`
  width: 100%;
  height: 65px;
  position: relative;
  background-color: white;
`;

const NavStyle = styled.div`
  width: 100%;
  height: 65px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 10000;
  opacity: 95%;
`;

// 로고를 왼쪽에 정렬하기 위한 컨테이너
const Left = styled.div`
  margin-left: 20px;
  margin-top: 3px;
  a {
    width: 110px;
    height: 50px;
  }
`;

const Right1 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block;
    position: absolute;
    right: 175px;
    bottom: 20px;
    font-size: 18px;
    font-weight: 800;
  }
`;

const Right2 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block;
    position: absolute;
    right: 100px;
    bottom: 20px;
    font-size: 18px;
    font-weight: 800;
  }
`;

// 네비게이션과 회색 선을 구분하는 분리선
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
  position: absolute;
  top: 64px; // 네비게이션 바의 높이인 65px 바로 아래에 위치하도록 설정
`;

export default Nav;
