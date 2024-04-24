import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { SUB_END_TEXT } from "../../constants/NewBoardsConstants.jsx";
import Missingimg from "../../img/Missing.png";

const NewBoards = ({}) => {
  const [views, setViews] = useState([]);
  const [projects, setProjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const projectsPerPage = 12; // 페이지당 보여줄 프로젝트 수

  // 페이지 변경 함수
  const paginate = (pageNumber) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(projects.length / projectsPerPage)
    ) {
      return; // 페이지 범위를 벗어나면 이동하지 않음
    }
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 프로젝트 배열을 계산하는 함수
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const navigate = useNavigate();
  // -------------------------------------------- axios 통신

  // 프로젝트 데이터를 서버에서 가져오는 함수
  // GET 요청
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("GET 요청 전송");
        const res = await axios.get("/boards");
        console.log("GET 요청 응답:", res.data.mainResult);
        setProjects(res.data.mainResult);
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
  const renderNewBox = (index) => {
    // projects 배열이 비어있는 경우, 모든 페이지에서 메시지를 표시합니다.
    if (projects.length === 1 && projects[0].isEmpty) {
      // 첫 번째 요소만 체크하여 중복 메시지 방지
      if (index === 0) {
        return (
          <div
            style={{
              width: "600px",
              height: "100px",
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              margin: "58%",
              marginTop: "800px",
            }}
          >
            <img src={Missingimg} />
          </div>
        );
      } else {
        // 첫 번째 요소가 아니면 렌더링하지 않음
        return null;
      }
    }

    const project = currentProjects[index];

    return (
      <NewBox
        key={index}
        className={`NewBox${index + 1}`}
        onClick={() => handleClick(index)}
      >
        <NewBoxContent>
          <ProjectStatus>{`${project.recruitType}`}</ProjectStatus>
          <NewStatus>{`${project.Newbread}`}</NewStatus>
          <NewSubEnd>
            <strong>{`${SUB_END_TEXT} ${project.enddate}`}</strong>
          </NewSubEnd>
          <NewSubMain>
            <strong>{project.title}</strong>
          </NewSubMain>
        </NewBoxContent>
        <NewView>
          <p>👀 조회수 {project.views}회</p>
        </NewView>
      </NewBox>
    );
  };

  const [searchWord, setsearchWord] = useState(""); // 검색어 상태

  const handleSearchChange = (e) => {
    setsearchWord(e.target.value); // 검색어 업데이트
  };

  const handleSearch = async () => {
    await AddProjects();
  };

  const handleClearSearch = async () => {
    try {
      // 검색어를 비우기 전에 원래의 프로젝트를 다시 불러오기
      const res = await axios.get("/boards");
      setProjects(res.data.mainResult);

      setsearchWord(""); // 검색어 비우기
      console.log("검색어가 비워졌습니다."); // 확인을 위한 콘솔 로그
    } catch (error) {
      console.error("프로젝트를 다시 불러오는데 실패했습니다.", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // 엔터 키를 눌렀을 때 검색 실행
      handleSearch();
    }
  };

  // -------------------------------------------- axios 통신
  const AddProjects = async () => {
    // let trimmedSearchWord = searchWord.trim();

    // 공백 검색어를 허용하지 않으려면 아래 조건을 사용
    // if (!trimmedSearchWord) {

    // 공백 검색어도 허용하려면 아래 조건을 사용
    if (searchWord === undefined) {
      // 검색어가 없는 경우, 빈 배열을 설정
      setProjects([]);
      return;
    }

    try {
      const res = await axios.get(`/boards/search/${searchWord}`);
      // 응답 데이터가 비어있는 경우 특별한 메시지를 포함하는 객체를 배열에 넣습니다.
      if (!res.data.mainResult || res.data.length === 0) {
        // 데이터가 없거나 길이가 0인 경우
        setProjects([{ isEmpty: true }]);
      } else {
        setProjects(res.data.mainResult);
      }
    } catch (error) {
      console.error("검색된 프로젝트가 없습니다!", error);
      // 오류 발생 시 빈 배열 대신 특별한 메시지를 포함하는 객체를 배열에 넣습니다.
      setProjects([{ isEmpty: true }]);
    }
  };
  // -------------------------------------------- axios 통신

  return (
    <div>
      <NewOutLine className="NewOut">
        <NewWrite className="NewWrite">
          <strong>🍞 최근에 올라왔어요</strong>
        </NewWrite>
        <NewSearch className="NewSearch">
          <NewSearchBox className="NewSearchBox">
            <input
              placeholder="🔍   제목, 글 내용을 검색해보세요."
              value={searchWord} // 검색어 입력값으로 설정
              onChange={handleSearchChange} // 검색어 입력시 이벤트 핸들러
              onKeyPress={handleKeyPress} // 엔터 키 감지 이벤트 핸들러 추가
            />
            {searchWord && ( // 검색어가 있을 때만 X 아이콘 표시
              <ClearButton onClick={handleClearSearch}>✖️</ClearButton>
            )}
          </NewSearchBox>
        </NewSearch>
        {currentProjects.map((_, index) => renderNewBox(index))}
        {/* 페이지 이동 함수 */}
        <Pagination>
          <PaginationArrow onClick={() => paginate(currentPage - 1)}>
            &lt;&lt;
          </PaginationArrow>
          <PaginationControls
            currentPage={currentPage}
            totalPageCount={Math.ceil(projects.length / projectsPerPage)}
            paginate={paginate}
          />
          <PaginationArrow onClick={() => paginate(currentPage + 1)}>
            &gt;&gt;
          </PaginationArrow>
        </Pagination>
      </NewOutLine>
    </div>
  );
};

const PaginationControls = ({ currentPage, totalPageCount, paginate }) => {
  const displayPageNumbers = 5;
  let startPageNumber = 1;

  // 현재 페이지가 마지막 단위 페이지보다 크면, 시작 페이지 번호를 조정
  if (currentPage % displayPageNumbers === 0) {
    startPageNumber = currentPage - (displayPageNumbers - 1);
  } else {
    startPageNumber =
      Math.floor(currentPage / displayPageNumbers) * displayPageNumbers + 1;
  }

  const endPageNumber = Math.min(
    totalPageCount,
    startPageNumber + displayPageNumbers - 1
  );

  return (
    <>
      {Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, i) => (
        <PaginationItem
          key={startPageNumber + i}
          isActive={startPageNumber + i === currentPage}
          onClick={() => paginate(startPageNumber + i)}
        >
          {startPageNumber + i}
        </PaginationItem>
      ))}
    </>
  );
};

// NewWrite 스타일드 컴포넌트: 새 글 영역 스타일
const NewWrite = styled.div`
  font-size: 26px; /* 글꼴 크기 */
  position: absolute; /* 위치 설정 */
  left: 10.1%; /* 왼쪽 여백 */
  margin-bottom: 58.5%; /* 하단 여백 */
  transform: translateX(-50%); /* 가로 방향으로 -50% 이동하여 가운데 정렬 */
`;

// NewSearch 스타일드 컴포넌트: 검색창 영역 스타일
const NewSearch = styled.div`
  display: flex; /* 플렉스박스 디스플레이 사용 */
  width: 300px; /* 너비 설정 */
  height: 34px; /* 높이 설정 */
  padding: 0 20px; /* 내부 여백 설정 */
  align-items: center; /* 수직 가운데 정렬 */
  grid-gap: 10px; /* 그리드 갭 */
  gap: 10px; /* 갭 */
  border-radius: 36px; /* 테두리 반경 */
  background: #f5f5f5; /* 배경색 */
  position: absolute; /* 위치 설정 */
  left: 72.8%; /* 왼쪽 여백 */
  margin-bottom: 58.3%; /* 하단 여백 */
`;

// NewSearchBox 스타일드 컴포넌트: 검색 입력창 스타일
const NewSearchBox = styled.div`
  input {
    border: none; /* 테두리 없음 */
    background: transparent; /* 배경 투명 */
    outline: none; /* 아웃라인 없음 */
    padding: 0; /* 내부 여백 없음 */
    font-weight: 700; /* 글꼴 두껍게 */
    font-size: 16px; /* 글꼴 크기 */
    width: 120%; /* 너비 설정 */
    position: relative; /* 상대 위치 */
  }
`;

const ClearButton = styled.button`
  margin-left: 48%; /* 왼쪽 여백 */
  margin-top: -6.9%; /* 상단 여백 */
  position: absolute; /* 위치 설정 */
  border-radius: 10px; /* 테두리 반경 설정 */
  border-color: rgb(91, 231, 100); /* 테두리 색상 설정 */
`;

// NewOutLine 스타일드 컴포넌트: 전체 보드 영역 스타일
const NewOutLine = styled.div`
  width: 1300px; /* 너비 설정 */
  height: 700px; /* 높이 설정 */
  position: relative; /* 위치 설정 */
  margin: 0 auto; /* 좌우 가운데 정렬 */
  display: grid; /* 그리드 디스플레이 사용 */
  grid-template-columns: repeat(4, 1fr); /* 네 개의 열로 반복 */
  grid-auto-rows: minmax(
    100px,
    200px
  ); /* 최소 높이는 100px, 최대 높이는 200px로 설정 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  gap: 25px; /* 갭 설정 */
`;

// NewBox 스타일드 컴포넌트: 개별 프로젝트 상자 스타일
const NewBox = styled.div`
  width: 294px; /* 너비 설정 */
  height: 200px; /* 높이 설정 */
  margin-top: 9%; /* 상단 여백 */
  margin-bottom: 5px; /* 하단 여백 */
  border: 1px solid #8f8f8f; /* 테두리 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  cursor: pointer; /* 포인터 커서 */
  &:hover {
    transform: scale(1.04); /* 호버시 확대 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 그림자 설정 */
  }
`;

// NewBoxContent 스타일드 컴포넌트: 개별 프로젝트 내용 영역 스타일
const NewBoxContent = styled.div`
  width: 83%; /* 너비 설정 */
  height: 160px; /* 높이 설정 */
  display: inline-block; /* 인라인 블록 디스플레이 */
  padding: 20px 25px; /* 내부 여백 설정 */
  border-radius: 19px; /* 테두리 반경 설정 */
  background-color: #ffffff; /* 배경색 설정 */
  margin-top: 0px; /* 상단 여백 */
`;

// ProjectStatus 스타일드 컴포넌트: 프로젝트 상태 스타일
const ProjectStatus = styled.div`
  display: flex; /* 플렉스박스 디스플레이 사용 */
  width: 35%; /* 너비 설정 */
  height: 20px; /* 높이 설정 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  border: 1px solid gray; /* 테두리 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  font-size: 12px; /* 글꼴 크기 */
`;

// NewStatus 스타일드 컴포넌트: 새 글 상태 스타일
const NewStatus = styled.div`
  display: flex; /* 플렉스박스 디스플레이 사용 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  width: 35%; /* 너비 설정 */
  height: 16px; /* 높이 설정 */
  padding: 2px 8px; /* 내부 여백 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  border: 1px solid #ffd900; /* 테두리 설정 */
  color: #fdb900; /* 글자 색상 설정 */
  font-size: 11px; /* 글꼴 크기 */
  font-weight: 700; /* 글꼴 두껍게 */
  letter-spacing: -0.56px; /* 글자 간격 설정 */
  border-radius: 20px; /* 테두리 반경 설정 */
  margin-left: 57%; /* 왼쪽 여백 */
  margin-top: -22px; /* 상단 여백 */
`;

// NewSubEnd 스타일드 컴포넌트: 하단 부분 마감일 스타일
const NewSubEnd = styled.div`
  font-size: 14px; /* 글꼴 크기 */
  text-align: left; /* 왼쪽 정렬 */
  margin-top: 10%; /* 상단 여백 */
  color: #ff0000; /* 글자 색상 설정 */
`;

// NewSubMain 스타일드 컴포넌트: 메인 부분 스타일
const NewSubMain = styled.div`
  width: 242px; /* 너비 고정 */
  height: 52px; /* 높이 설정 */
  font-size: 18px; /* 글꼴 크기 */
  line-height: 1.4; /* 줄 간격 설정 */
  text-align: left; /* 왼쪽 정렬 */
  margin-top: 3.5%; /* 상단 여백 */
  overflow: hidden; /* 넘치는 내용 숨김 */
  display: -webkit-box; /* 웹킷 박스 디스플레이 사용 */
  -webkit-line-clamp: 2; /* 두 줄로 제한 */
  -webkit-box-orient: vertical; /* 세로 방향으로 박스 정렬 */
  letter-spacing: -1px; /* 글자 간격 설정 */
`;

// NewView 스타일드 컴포넌트: 보기 영역 스타일
const NewView = styled.div`
  font-size: 15px; /* 글꼴 크기 */
  margin-left: 45%; /* 왼쪽 여백 */
  margin-top: -50px; /* 상단 여백 */
  font-weight: 500; /* 글꼴 두껍게 */
`;

// Pagination 스타일드 컴포넌트: 페이지네이션 스타일
const Pagination = styled.div`
  position: absolute; /* 위치 설정 */
  display: flex; /* 플렉스박스 디스플레이 사용 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  margin-top: 63%; /* 상단 여백 */
  margin-bottom: 61px; /* 하단 여백 */
  left: 49.7%; /* 왼쪽 여백을 50%로 설정하여 가운데 정렬 */
  transform: translateX(-50%); /* 가로 방향으로 -50% 이동하여 가운데 정렬 */
  z-index: 2; /* 층 위치 설정 */
`;

// PaginationItem 스타일드 컴포넌트: 페이지네이션 아이템 스타일
const PaginationItem = styled.div`
  cursor: pointer; /* 포인터 커서 */
  padding: 5px 10px; /* 내부 여백 설정 */
  margin: 0 5px; /* 여백 설정 */
  border-radius: 5px; /* 테두리 반경 설정 */
  border: none; /* 테두리 설정 */
  border-radius: 30px; /* 모서리를 반지름 30px의 원으로 만듦 */
  background: white; /* 배경색 설정 */
  color: black; /* 글자 색상 설정 */
  font-weight: bold; /* 글꼴 두껍게 */
  background: ${({ isActive }) =>
    isActive ? "#d5ffd5" : "white"}; /* 현재 페이지 여부에 따라 배경색 변경 */

  &:hover {
    background: #ebebeb; /* 호버 시 배경색 변경 */
  }
`;

// PaginationArrow 스타일드 컴포넌트: 페이지네이션 화살표 스타일
const PaginationArrow = styled.div`
  cursor: pointer; /* 포인터 커서 */
  padding: 5px; /* 내부 여백 설정 */
  margin: 0 5px; /* 여백 설정 */
  border: none;
  border-radius: 30px; /* 모서리를 반지름 30px의 원으로 만듦 */
  background: white; /* 배경색 설정 */
  color: black; /* 글자 색상 설정 */
  font-weight: bold; /* 글꼴 두껍게 */
  display: ${({ hide }) =>
    hide ? "none" : "block"}; /* hide prop 값에 따라 화살표 숨김 여부 설정 */
  z-index: 1; /* 층 위치 설정 */

  &:hover {
    background: #ebebeb; /* 호버 시 배경색 변경 */
  }
`;

export default NewBoards;
