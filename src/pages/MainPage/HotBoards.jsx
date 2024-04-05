import React, { useState } from "react";
import styled from "styled-components";

const HotBoards = (props) => {
  const [views, setViews] = useState([0, 0, 0, 0]);
  const [projects, setProjects] = useState([
    {
      projectStatus: "🎥 프로젝트",
      deadlineStatus: "🚨 마감 1일전",
      subEndText: "마감일 | 2024.04.05",
      subMainText: "[FrontEnd, BackEnd] 웹페이지 개발자 구인합니다!",
    },
    {
      projectStatus: "✏️ 스터디",
      deadlineStatus: "🚨 마감 7일전",
      subEndText: "마감일 | 2024.04.11",
      subMainText: "이번 주 종로 KG ITBANK에서 함께 공부하실 학우분 구합니다!",
    },
    {
      projectStatus: "🎥 프로젝트",
      deadlineStatus: "🚨 마감 14일전",
      subEndText: "마감일 | 2024.04.18",
      subMainText:
        "완료된 프로젝트 배포 도와주실 분 구합니다!! [사례금 100만원!!]",
    },
    {
      projectStatus: "✏️ 스터디",
      deadlineStatus: "🚨 마감 21일전",
      subEndText: "마감일 | 2024.04.25",
      subMainText:
        "코딩룸 웹사이트가 신규 오픈했대요!! 같이 개발 공부하실 분 구합니다!!",
    },
  ]);

  const handleClick = (index) => {
    const newViews = [...views];
    newViews[index] += 1;
    setViews(newViews);
  };

  const renderHotBox = (index) => {
    const project = projects[index];
    return (
      <HotBox
        key={index}
        className={`HotBox${index + 1}`}
        onClick={() => handleClick(index)}
      >
        <HotBoxContent>
          <ProjectStatus>{project.projectStatus}</ProjectStatus>
          <DeadlineStatus>{project.deadlineStatus}</DeadlineStatus>
          <HotSubEnd>
            <strong>{project.subEndText}</strong>
          </HotSubEnd>
          <HotSubMain>
            <strong>{project.subMainText}</strong>
          </HotSubMain>
        </HotBoxContent>
        <HotView>
          <p>👀 조회수 {views[index]}회</p>
        </HotView>
      </HotBox>
    );
  };

  return (
    <HotOutLine className="HotOut">
      <HotWrite className="HotWrite">
        <strong>{props.container}🔥 이번주 코드룸 인기글</strong>
      </HotWrite>
      {projects.map((_, index) => renderHotBox(index))}
    </HotOutLine>
  );
};

const HotOutLine = styled.div`
  width: 1300px;
  height: 380px;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 열 */
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 2%;
  margin-top: 1%;
`;

const HotWrite = styled.div`
  font-size: 26px;
  position: absolute;
  left: 11%;
  margin-bottom: 20%;
  transform: translateX(-50%);
`;

const HotBox = styled.div`
  width: 294px;
  height: 199px;
  margin-top: 9%;
  margin-bottom: 5px;
  border: 1px solid #8f8f8f;
  border-radius: 20px;
  cursor: pointer;
`;

const HotBoxContent = styled.div`
  width: 82%;
  height: 150px;
  display: inline-block;
  padding: 20px 25px;
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 3px;
`;

const ProjectStatus = styled.div`
  display: flex;
  width: 35%;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
  font-size: 12px;
`;

const DeadlineStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.37%;
  height: 16px;
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid rgb(234, 114, 111);
  color: rgb(234, 114, 111);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.56px;
  border-radius: 20px;
  margin-left: 63%;
  margin-top: -22px;
`;

const HotSubEnd = styled.div`
  font-size: 14px;
  text-align: left;
  margin-top: 10%;
  color: #ff0000;
`;

const HotSubMain = styled.div`
  width: 242px; /* 너비 고정 */
  height: 52px; /* 높이를 텍스트 두 줄이 들어갈 정도로 조절 */
  font-size: 18px; /* 폰트 크기 */
  line-height: 1.4; /* 줄 간격 조절 */
  text-align: left;
  margin-top: 3.5%;
  overflow: hidden; /* 넘치는 내용 숨김 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄로 제한 */
  -webkit-box-orient: vertical;
  letter-spacing: -1px;
`;

const HotView = styled.div`
  font-size: 15px;
  margin-left: 45%;
  margin-top: -50px;
  font-weight: 500;
`;

export default HotBoards;
