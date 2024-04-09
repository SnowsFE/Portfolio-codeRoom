import React, { useState } from "react";
import styled from "styled-components";
import Skill from "./Skill.jsx";
import BrightMode from "./BrightMode.jsx";

const HotBoards = (props) => {
  // 조회수와 프로젝트 상태를 관리하는 상태 변수 설정
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

  // 클릭 이벤트 핸들러 정의
  const handleClick = (index) => {
    const newViews = [...views];
    newViews[index] += 1;
    setViews(newViews);
  };

  // HotBox 렌더링 함수 정의
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
      <Skill />
      <HotWrite className="HotWrite">
        <strong>{props.container}🔥 이번주 코드룸 인기글</strong>
      </HotWrite>
      {/* 프로젝트 목록 렌더링 */}
      {projects.map((_, index) => renderHotBox(index))}
    </HotOutLine>
  );
};

// HotOutLine 컴포넌트 스타일: 핫라인 영역 전체 스타일 설정
const HotOutLine = styled.div`
  width: 1300px; /* 영역 너비 */
  height: 380px; /* 영역 높이 */
  position: relative; /* 위치 지정 */
  margin: 0 auto; /* 가운데 정렬을 위한 왼쪽, 오른쪽 여백 자동 설정 */
  display: grid; /* 그리드 사용 */
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 열로 그리드 설정 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 25px; /* 그리드 간격 설정 */
  margin-bottom: 2%; /* 하단 마진 */
  margin-top: 1%; /* 상단 마진 */
`;

// HotWrite 컴포넌트 스타일: 핫라인 제목 스타일 설정
const HotWrite = styled.div`
  font-size: 26px; /* 폰트 크기 */
  position: absolute; /* 위치 지정 */
  left: 11%; /* 왼쪽 여백 */
  margin-bottom: 20%; /* 하단 여백 */
  transform: translateX(-50%); /* 가운데 정렬을 위한 위치 조정 */
`;

// HotBox 컴포넌트 스타일: 핫 박스 컨테이너 스타일 설정
const HotBox = styled.div`
  width: 294px; /* 너비 */
  height: 200px; /* 높이 */
  margin-top: 9%; /* 상단 여백 */
  margin-bottom: 5px; /* 하단 여백 */
  border: 1px solid #8f8f8f; /* 테두리 스타일과 색상 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  cursor: pointer; /* 마우스 커서 모양 설정 */
`;

// HotBoxContent 컴포넌트 스타일: 핫 박스 내용 영역 스타일 설정
const HotBoxContent = styled.div`
  width: 83%; /* 너비 */
  height: 160px; /* 높이 */
  display: inline-block; /* 인라인 블록 요소로 표시 */
  padding: 20px 25px; /* 안쪽 여백 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  background-color: #ffffff; /* 배경색 설정 */
  margin-top: 0px; /* 상단 여백 */
`;

// ProjectStatus 컴포넌트 스타일: 프로젝트 상태 표시 스타일 설정
const ProjectStatus = styled.div`
  display: flex; /* 플렉스 박스 사용 */
  width: 35%; /* 너비 */
  height: 20px; /* 높이 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  border: 1px solid gray; /* 테두리 스타일과 색상 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  font-size: 12px; /* 폰트 크기 */
`;

// DeadlineStatus 컴포넌트 스타일: 마감 상태 표시 스타일 설정
const DeadlineStatus = styled.div`
  display: flex; /* 플렉스 박스 사용 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 28.37%; /* 너비 */
  height: 16px; /* 높이 */
  padding: 2px 8px; /* 안쪽 여백 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  border: 1px solid rgb(234, 114, 111); /* 테두리 스타일과 색상 설정 */
  color: rgb(234, 114, 111); /* 글자 색상 설정 */
  font-size: 11px; /* 폰트 크기 */
  font-weight: 700; /* 글자 두께 설정 */
  letter-spacing: -0.56px; /* 글자 간격 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  margin-left: 63%; /* 왼쪽 여백 */
  margin-top: -22px; /* 상단 여백 */
`;

// HotSubEnd 컴포넌트 스타일: 핫라인 부제목 스타일 설정
const HotSubEnd = styled.div`
  font-size: 14px; /* 폰트 크기 */
  text-align: left; /* 텍스트 정렬 */
  margin-top: 10%; /* 상단 여백 */
  color: #ff0000; /* 글자 색상 설정 */
`;

// HotSubMain 컴포넌트 스타일: 핫라인 메인 부분 스타일 설정
const HotSubMain = styled.div`
  width: 242px; /* 너비 고정 */
  height: 52px; /* 높이 고정 */
  font-size: 18px; /* 폰트 크기 */
  line-height: 1.4; /* 줄 간격 설정 */
  text-align: left; /* 텍스트 정렬 */
  margin-top: 3.5%; /* 상단 여백 */
  overflow: hidden; /* 넘치는 내용 숨김 */
  display: -webkit-box; /* 웹킷 박스 사용 */
  -webkit-line-clamp: 2; /* 두 줄로 제한 */
  -webkit-box-orient: vertical; /* 박스 방향 설정 */
  letter-spacing: -1px; /* 글자 간격 설정 */
`;

// HotView 컴포넌트 스타일: 핫라인 조회수 스타일 설정
const HotView = styled.div`
  font-size: 15px; /* 폰트 크기 */
  margin-left: 45%; /* 왼쪽 여백 */
  margin-top: -50px; /* 상단 여백 */
  font-weight: 500; /* 글자 두께 설정 */
`;

export default HotBoards;
