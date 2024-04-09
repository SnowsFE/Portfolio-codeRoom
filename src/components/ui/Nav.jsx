import React from "react";
import styled from "styled-components";
import CodeRoom from "../../img/CodeRoom.png";
import BrightMode from "../../pages/MainPage/BrightMode";

const nav = (props) => {
  return (
    <NavStyle className="Logo">
      <Left>
        <a href="/">
          <img src={CodeRoom} alt="로고" />
          {props.container}
        </a>
      </Left>

      <Right>
        <BrightMode />
      </Right>

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
    </NavStyle>
  );
};

const NavStyle = styled.div`
  width: 1200px;
  height: 55px;
  margin: 0 auto; /* 가운데 정렬 */
  display: flex; /* Flexbox를 사용합니다. */
  flex-direction: row;
  position: relative;
  justify-content: space-between; /* 양 끝으로 정렬합니다. */
  align-items: center; /* 세로 방향으로 중앙 정렬합니다. */
  margin-top: 15px;
  margin-bottom: 15px;
`;

// 로고를 왼쪽에 정렬하기 위한 컨테이너
const Left = styled.div`
  a {
    width: 110px;
    height: 50px;
  }
`;

const Right = styled.div`
  border: 1px solid greenyellow;
  border-radius: 15px;
  position: absolute;
  right: 150px;
  bottom: 10px;
`;

const Right1 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
    position: absolute;
    right: 75px;
    bottom: 16px;
    font-size: 18px;
    font-weight: 800;
  }
`;

const Right2 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
    position: absolute;
    right: 0px;
    bottom: 16px;
    font-size: 18px;
    font-weight: 800;
  }
`;

export default nav;
