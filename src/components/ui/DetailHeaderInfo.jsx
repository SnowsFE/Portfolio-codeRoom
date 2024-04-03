import styled from "styled-components";
import BackArrow from "../../img/BackArrow.png";
import { svgFiles, fileNames } from "../../constants/fileNames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 제목, 작성자, 작성 일자
const DetailTitle = () => {
  const navigator = useNavigate();

  const [title, setTitle] = useState(""); //제목
  const [writer, setWriter] = useState("빌게이츠"); //작성자
  const [writeDt, setWriteDt] = useState("2024.04.03"); //작성 일자

  return (
    <StudyContentContainer>
      <BackArrowImgArea onClick={() => navigator(-1)}>
        <img src={BackArrow} alt="" />
      </BackArrowImgArea>
      <h1 className="study-title">
        🌶️(필요 포지션 : 프론트엔드/디자인/기획) 사이드 프로젝트 팀
        빌딩중입니다. 🌶️
      </h1>
      <UserInfo>
        <div className="username">{writer}</div>
        <div className="user-info-partition">|</div>
        <div className="date">{writeDt}</div>
      </UserInfo>
      <hr
        style={{
          height: "2px",
          backgroundColor: "rgb(113, 113, 113)",
          border: "none",
        }}
      />
      <DetailSubContent></DetailSubContent>
    </StudyContentContainer>
  );
};

// 모집 구분, 진행 방식, 모집 인원 ...
const DetailSubContent = () => {
  const [recruitType, setRecruitType] = useState(""); //모집구분
  const [progressMethod, setProgressMethod] = useState(""); //진행방식
  const [recruitMember, setRecruitMember] = useState(null); //모집인원
  const [plan, setPlan] = useState(""); //시작예정
  const [contact, setContact] = useState(""); //연락방법
  const [duration, setDuration] = useState(null); //예상 기간
  const [recruitField, setRecruitField] = useState(null); //모집 분야
  const [language, setLanguage] = useState(null); //사용 언어 ex) spring

  return (
    <SubContentContainer>
      <ul>
        <li>
          <span className="sub-title">모집 구분</span>
          <span className="sub-content">프로젝트</span>
        </li>
        <li>
          <span className="sub-title">진행 방식</span>
          <span className="sub-content">온라인</span>
        </li>
        <li>
          <span className="sub-title">모집 인원</span>
          <span className="sub-content">인원 미정</span>
        </li>
        <li>
          <span className="sub-title">시작 예정</span>
          <span className="sub-content">2024.04.07</span>
        </li>
        <li>
          <span className="sub-title">연락 방법</span>
          <span className="sub-field">오픈톡</span>
        </li>
        <li>
          <span className="sub-title">예상 기간</span>
          <span className="sub-content">2개월</span>
        </li>
        <li>
          <span className="sub-title">모집 분야</span>
          <span className="sub-field">디자이너</span>
          <span className="sub-field">기획자</span>
          <span className="sub-field">백엔드</span>
          <span className="sub-field">프론트엔드</span>
        </li>
        <li>
          <span className="sub-title">사용 언어</span>
          <span>
            <img src={svgFiles[23]} alt="" />
          </span>
          <span>
            <img src={svgFiles[20]} alt="" />
          </span>
          <span>
            <img src={svgFiles[25]} alt="" />
          </span>
        </li>
      </ul>
    </SubContentContainer>
  );
};

export { DetailTitle, DetailSubContent };

// subContent css

const SubContentContainer = styled.section`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 100%;
  margin: 30px auto;

  span {
    font-size: 20px;
  }
  li {
    display: inline-block; /* li 요소를 인라인 블록 요소로 표시하여 한 줄에 두 개씩 나타나도록 함 */
    width: 48%; /* 부모 요소의 너비의 절반 크기로 설정하여 두 개씩 나란히 위치하도록 함 */
    margin-right: 2%; /* 각 li 요소 사이의 우측 여백 설정 */
    margin-bottom: 30px;
    text-align: center;
    box-sizing: border-box;
  }
  .sub-title {
    color: rgb(113, 113, 113);
    font-weight: 700;
    margin-right: 15px;
  }
  .sub-content {
    font-weight: 700;
  }
  .sub-field {
    color: rgb(74, 94, 117);
    background-color: rgb(242, 244, 248);
    border-radius: 5px;
    font-weight: 700;
    margin-right: 15px;
  }
  img {
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
`;

// title css
const StudyContentContainer = styled.div`
  /* height: 530px; */
  border: 1px solid black;
  width: 65%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;

  .study-title {
    text-align: left;
    font-weight: 700;
    font-size: 36px;
  }

  hr {
    height: 2px;
    background-color: rgb(113, 113, 113);
  }
`;

const UserInfo = styled.div`
  margin: 25px 0 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .username {
    font-weight: 700;
    font-size: 24px;
    margin-right: 18px;
    padding-left: 10px;
  }
  .date {
    font-weight: 400;
    color: rgb(113, 113, 113);
    font-size: 24px;
  }
  .user-info-partition {
    font-weight: 400;
    color: rgb(113, 113, 113);
    font-size: 24px;
    margin-right: 15px;
  }
`;

const BackArrowImgArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
`;
