import React, { useEffect, useRef } from "react";
import InfoBox from "../../components/ui/InfoBox";
import cheerup from "../../img/cheerup.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InfoPage = () => {
  const navigator = useNavigate();
  const backgroundImg2Ref = useRef(null); // useRef를 사용하여 ref 생성

  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement("div");
      emoji.innerHTML = ["✨", "🎉", "🥳", "🎊"][Math.floor(Math.random() * 4)];
      emoji.classList.add("confetti");
      emoji.style.left = `${Math.random() * 90}%`;
      emoji.style.top = `${Math.random() * 90}%`;
      backgroundImg2Ref.current.appendChild(emoji); // backgroundImg2Ref.current를 사용하여 ref 참조
      setTimeout(() => emoji.remove(), 1000); // 1초 후 이모지 삭제
    }, 400); // 0.4초마다 새 이모지 생성

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HeaderInfo>
        <h4 onClick={() => navigator("/")}>Coding-room Project</h4>
        <h1>
          프로젝트 & 스터디 모집과 <br /> 트랜드 파악을 한번에
        </h1>
      </HeaderInfo>
      <BackgroundImg1></BackgroundImg1>
      <BodyInfo>
        <h4>Beyond Diagnostics</h4>
        <h1>코딩룸은 클라이언트에게 편안한 UX 를 제공합니다</h1>
        <p>
          코딩룸은 프로젝트를 진행할 팀원들을 모집하는 플랫폼으로, <br />
          프로젝트에 필요한 역량과 관심 분야에 맞는 팀원을 찾을 수 있습니다.
        </p>
      </BodyInfo>
      <InfoBox></InfoBox>
      <BackgroundImg2 ref={backgroundImg2Ref} onClick={() => navigator("/")}>
        <h1>코딩룸은 당신의 꿈을 응원합니다</h1>
      </BackgroundImg2>
    </div>
  );
};

export default InfoPage;

// 첫 번째 배경 이미지
const BackgroundImg1 = styled.section`
  height: 680px;
  background-image: url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundImg2 = styled.section`
  width: 100%;
  min-width: 1280px;
  height: 680px;
  min-height: 700px;
  background-image: url(${cheerup});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.7;
  cursor: pointer;
  position: relative; /* 이모지의 위치 지정을 위해 필요 */

  h1 {
    line-height: 680px;
    color: white; /* 기본 색상 */
    font-size: 45px; /* 기본 크기 */
    font-weight: 700;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
      0px 5px 0 black; /* 텍스트 테두리 추가 */
  }

  /* 이모지 애니메이션 */
  .confetti {
    position: absolute;
    font-size: 24px;
  }
`;

// 첫 번째 글
const HeaderInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 480px;
  text-align: left;
  padding-left: 100px;

  h4 {
    color: rgb(91, 231, 100);
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
  }
  h1 {
    font-weight: 700;
    font-size: 48px;
  }
`;

// 두 번째 글
const BodyInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 380px;
  text-align: center;
  padding-left: 30px;

  h4 {
    color: rgb(91, 231, 100);
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 24px;
  }
  h1 {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 25px;
  }
  p {
    font-size: 18px;
  }
`;
