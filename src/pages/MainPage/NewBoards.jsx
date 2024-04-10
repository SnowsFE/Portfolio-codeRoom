import React, { useState } from "react";
import styled from "styled-components";

const NewBoards = (props) => {
  const [views, setViews] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [projects, setProjects] = useState([
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[FrontEnd, BackEnd] 웹페이지 개발자 구인합니다!",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "이번 주 종로 KG ITBANK에서 함께 공부하실 학우분 구합니다!",
    },
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText:
        "완료된 프로젝트 배포 도와주실 분 구합니다!! [사례금 100만원!!]",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText:
        "코딩룸 웹사이트가 신규 오픈했대요!! 같이 개발 공부하실 분 구합니다!!",
    },
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[iOS, Android] 앱 개발자를 모집합니다!",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "인턴 개발자를 찾습니다. 기초 지식 필수!",
    },
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[UI/UX] 디자이너를 구합니다. 창의력과 열정 필수!",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "문서 작성자를 모집합니다. 글쓰기 능력 중요!",
    },
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[FullStack] 웹 개발자를 찾습니다. 경력 우대!",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[Unity, Unreal] 게임 개발자를 모집합니다!",
    },
    {
      projectStatus: "🎥 프로젝트",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText: "[Python, R] 데이터 분석가를 찾습니다. 통계학 지식 필요!",
    },
    {
      projectStatus: "✏️ 스터디",
      NewStatus: "🍞 따끈따끈 새 글",
      subEndText: "마감일 | 2024.04.26",
      subMainText:
        "품질 보증(QA) 테스터를 모집합니다. 테스트 자동화 경험 우대!",
    },
    {
      projectStatus: "🍱 점심 메뉴",
      NewStatus: "🍖 배고파",
      subEndText: "마감일 | 2024.04.31",
      subMainText: "종로 3가 최고의 맛집 리스트를 소개합니다!!",
    },
  ]);

  //   useEffect(() => {
  //     // 백엔드에서 게시글 목록을 불러오기
  //     fetch('https://your-backend-api.com/projects')
  //       .then((response) => response.json())
  //       .then((data) => setProjects(data))
  //       .catch((error) => console.error("Fetching projects failed", error));
  //   }, []); // 빈 의존성 배열을 넣어 컴포넌트가 마운트될 때만 요청합니다.

  //   // UI 렌더링 로직
  //   return (
  //     <div>
  //       {projects.map((project, index) => (
  //         <div key={index}>
  //           <h2>{project.projectStatus} {project.NewStatus}</h2>
  //           <p>{project.subEndText}</p>
  //           <p>{project.subMainText}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

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

  // 클릭 이벤트 핸들러 함수
  const handleClick = (index) => {
    const newViews = [...views];
    newViews[index] += 1;
    setViews(newViews);
  };

  // 프로젝트를 렌더링하는 함수
  const renderNewBox = (index) => {
    const project = currentProjects[index];
    return (
      <NewBox
        key={index}
        className={`NewBox${index + 1}`}
        onClick={() => handleClick(index)}
      >
        <NewBoxContent>
          <ProjectStatus>{project.projectStatus}</ProjectStatus>
          <NewStatus>{project.NewStatus}</NewStatus>
          <NewSubEnd>
            <strong>{project.subEndText}</strong>
          </NewSubEnd>
          <NewSubMain>
            <strong>{project.subMainText}</strong>
          </NewSubMain>
        </NewBoxContent>
        <NewView>
          <p>👀 조회수 {views[index]}회</p>
        </NewView>
      </NewBox>
    );
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // 검색어 업데이트
  };

  const handleClearSearch = () => {
    setSearchValue(""); // 검색어 비우기
  };

  const [searchValue, setSearchValue] = useState(""); // 검색어 상태
  const ClearButton = styled.button`
    margin-left: 48%;
    margin-top: -6.9%;
    position: absolute;
    border-radius: 10px;
    border-color: rgb(91, 231, 100);
  `;

  return (
    <div>
      <NewOutLine className="NewOut">
        <NewWrite className="NewWrite">
          <strong>{props.container}🍞 최근에 올라왔어요</strong>
        </NewWrite>
        <NewSearch className="NewSearch">
          <NewSearchBox className="NewSearchBox">
            <input
              placeholder="🔍   제목, 글 내용을 검색해보세요."
              value={searchValue} // 검색어 입력값으로 설정
              onChange={handleSearchChange} // 검색어 입력시 이벤트 핸들러
            />
            {searchValue && ( // 검색어가 있을 때만 X 아이콘 표시
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
  const halfDisplayPageNumbers = Math.floor(displayPageNumbers / 2);
  const startPageNumber = Math.max(1, currentPage - halfDisplayPageNumbers);
  const endPageNumber = Math.min(
    totalPageCount,
    startPageNumber + displayPageNumbers - 1
  );

  return (
    <>
      {Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, i) => (
        <PaginationItem
          key={startPageNumber + i}
          onClick={() => paginate(startPageNumber + i)}
        >
          {startPageNumber + i}
        </PaginationItem>
      ))}
    </>
  );
};

const NewWrite = styled.div`
  font-size: 26px;
  position: absolute;
  left: 10.1%;
  margin-bottom: 58.5%;
  transform: translateX(-50%);
`;

const NewSearch = styled.div`
  display: flex;
  width: 300px;
  height: 34px;
  padding: 0 20px;
  align-items: center;
  grid-gap: 10px;
  gap: 10px;
  border-radius: 36px;
  background: #f5f5f5;
  position: absolute;
  left: 72.8%;
  margin-bottom: 58.3%;
`;

const NewSearchBox = styled.div`
  input {
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    width: 150%;
    position: relative;
  }
`;

const NewOutLine = styled.div`
  width: 1300px;
  height: 700px;
  position: relative;
  margin: 0 auto;
  display: grid; /* 그리드 디스플레이 사용 */
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 열 */
  grid-auto-rows: minmax(
    100px,
    200px
  ); /* 최소 높이는 200px, 최대 높이는 250px, 내용에 따라 자동 조정 */

  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const NewBox = styled.div`
  width: 294px;
  height: 200px;
  margin-top: 9%;
  margin-bottom: 5px;
  border: 1px solid #8f8f8f;
  border-radius: 20px;
  cursor: pointer;
`;

const NewBoxContent = styled.div`
  width: 83%;
  height: 160px;
  display: inline-block;
  padding: 20px 25px;
  border-radius: 19px;
  background-color: #ffffff;
  margin-top: 0px;
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

const NewStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 16px;
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid #ffd900;
  color: #fdb900;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.56px;
  border-radius: 20px;
  margin-left: 57%;
  margin-top: -22px;
`;

const NewSubEnd = styled.div`
  font-size: 14px;
  text-align: left;
  margin-top: 10%;
  color: #ff0000;
`;

const NewSubMain = styled.div`
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

const NewView = styled.div`
  font-size: 15px;
  margin-left: 45%;
  margin-top: -50px;
  font-weight: 500;
`;

const Pagination = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 63%;
  margin-bottom: 61px;
  margin-left: 43.5%;
  z-index: 2;
`;

const PaginationItem = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid black;
  background: white;
  color: black;
  font-weight: bold;

  &:hover {
    background: rgb(91, 231, 100); /* 호버 시 배경색 변경 */
  }
`;

const PaginationArrow = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
  background: white;
  color: black;
  font-weight: bold;
  display: ${({ hide }) =>
    hide ? "none" : "block"}; /* hide prop 값에 따라 화살표 숨김 여부 설정 */
  z-index: 1;

  &:hover {
    background: rgb(91, 231, 100); /* 호버 시 배경색 변경 */
    transform: scale(1.1); /* 호버 시 크기 증가 효과 */
  }
`;

export default NewBoards;
