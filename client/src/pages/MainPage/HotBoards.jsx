import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Skill from "./Skill.jsx";
import { useNavigate } from "react-router-dom";
import {
  DEADLINE_STATUS,
  SUB_END_TEXT,
} from "../../constants/HotBoardsConstants.jsx";

const HotBoards = ({}) => {
  // 조회수와 프로젝트 상태를 관리하는 상태 변수 설정
  const [views, setViews] = useState([]);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  // -------------------------------------------- axios 통신

  // 프로젝트 데이터를 서버에서 가져오는 함수
  // GET 요청
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("GET 요청 전송");
        const res = await axios.get("/boards");
        console.log("GET 요청 응답:", res.data.popularResult);
        setProjects(res.data.popularResult);
      } catch (error) {
        console.error("프로젝트를 불러오는데 실패했습니다.", error);
      }
    };

    fetchProjects();
  }, []);

  // 조회수를 업데이트하는 함수
  // POST 요청
  const updateViews = async (index) => {
    const updatedViews = [...views];
    updatedViews[index] += 1;
    setViews(updatedViews);

    try {
      console.log("POST 요청 전송:", {
        projectId: projects[index].id,
        views: updatedViews[index],
      });
      await axios.post("/boards", {
        projectId: projects[index].id,
        views: updatedViews[index],
      });
      console.log("POST 요청 완료");
    } catch (error) {
      console.error("조회수를 업데이트하는데 실패했습니다.", error);
    }
  };

  // 프로젝트 클릭 이벤트 핸들러
  const handleClick = async (index) => {
    await updateViews(index); // 조회수 업데이트
    navigate(`/boards/${projects[index].board_uid}`, {
      state: { project: projects[index] },
    });
  };
  // -------------------------------------------- axios 통신

  const renderHotBox = (index) => {
    const project = projects[index];
    // 마감일까지 남은 일수 계산
    const today = new Date();
    const endDate = new Date(project.enddate);
    const remainingDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

    // DEADLINE_STATUS 상수를 사용하여 마감일 문자열을 생성
    const deadlineStatusText = DEADLINE_STATUS.replace(
      "{remainingDays}",
      remainingDays
    );

    return (
      <HotBox key={index} onClick={() => handleClick(index)}>
        <HotBoxContent>
          <ProjectStatus>{`${project.recruitType}`}</ProjectStatus>
          <DeadlineStatus>{deadlineStatusText}</DeadlineStatus>
          <HotSubEnd>
            <strong>{`${SUB_END_TEXT} ${project.enddate}`}</strong>
          </HotSubEnd>
          <HotSubMain>
            <strong>{project.title}</strong>
          </HotSubMain>
        </HotBoxContent>
        <HotView>
          <p>👀 조회수 {project.views}회</p>
        </HotView>
      </HotBox>
    );
  };

  return (
    <HotOutLine className="HotOut">
      <Skill />
      <HotWrite className="HotWrite">
        <strong>🔥 이번주 코드룸 인기글</strong>
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
  &:hover {
    transform: scale(1.04); /* 호버시 확대 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 그림자 설정 */
  }
`;

// HotBoxContent 컴포넌트 스타일: 핫 박스 내용 영역 스타일 설정
const HotBoxContent = styled.div`
  width: 83%; /* 너비 */
  height: 160px; /* 높이 */
  display: inline-block; /* 인라인 블록 요소로 표시 */
  padding: 20px 25px; /* 안쪽 여백 설정 */
  border-radius: 19px; /* 테두리 반경 설정 */
  background-color: #ffffff; /* 배경색 설정 */
  margin-top: 0px; /* 상단 여백 */
  background-color: #ffffff;
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
  width: 31%; /* 너비 */
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
