import React from "react";
import styled from "styled-components";

const Nav = (props) => {
  return (
    <Navi className="Logo">
      <Left>
        <a href="#">
          <h1>{props.container} 로고</h1>
        </a>
      </Left>
      
      <Right1>
        <a href="#">
          <span>{props.container} 소개글</span>
        </a>
      </Right1>

      <Right2>
        <a href="#">
          <span>{props.container} 새 글쓰기</span>
        </a>
      </Right2>

      <Right3>
        <a href="#">
          <span>{props.container} 로그인</span>
        </a>
      </Right3>
    </Navi>
  );
};

const Navi = styled.div`
  background: gray;
  width: 66.7%;
  height: 6.3%;
  margin: 0 auto; /* 가운데 정렬 */
  display: flex; /* Flexbox를 사용합니다. */
  justify-content: space-between; /* 양 끝으로 정렬합니다. */
  align-items: center; /* 세로 방향으로 중앙 정렬합니다. */
`;

// 로고를 왼쪽에 정렬하기 위한 컨테이너
const Left = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
  }
`;

// 소개글과 기타 옵션을 오른쪽에 정렬하기 위한 컨테이너
const Right1 = styled.div`
  margin-left: 850px;
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
  }
`;

const Right2 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
  }
`;

const Right3 = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: block; /* 인라인 요소를 블록 요소로 변환합니다. */
  }
`;

export default Nav;
