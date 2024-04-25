import styled from "styled-components";
import BackArrow from "../../img/BackArrow.png";
import viewImg from "../../img/view.png";
import { svgFiles, fileNames } from "../../constants/fileNames";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/ui/Nav.jsx";

// 제목, 작성자, 작성 일자
const DetailTitle = ({
  title,
  writer,
  writeDt,
  view,
  language,
  recruitType,
  progressMethod,
  recruitMember,
  contact,
  duration,
  recruitField,
  endDate,
}) => {
  const navigator = useNavigate();

  const langIndex = [];
  // 서버로 부터 받은 langes 들에 대한 이미지 경로를 찾아주는 함수
  const findFileNames = () => {
    language.forEach((lang) => {
      langIndex.push(fileNames.indexOf(lang));
    });
    console.log("lang index: " + langIndex);
    console.log("lang 확인: " + svgFiles[langIndex[0]]);
  };
  findFileNames();

  return (
    <StudyContentContainer>
      <DetailBackArrowImgArea onClick={() => navigator("/")}>
        <img src={BackArrow} alt="" />
      </DetailBackArrowImgArea>
      <h1 className="study-title">{title}</h1>
      <DetailUserInfo>
        <div className="username">{writer}</div>
        <div className="user-info-partition">|</div>
        <div className="date">{writeDt}</div>
        <div className="view-area">
          <img src={viewImg} alt="" />
          <span>{view}</span>
        </div>
      </DetailUserInfo>
      <DetailSubContent
        langIndex={langIndex}
        recruitType={recruitType}
        progressMethod={progressMethod}
        recruitMember={recruitMember}
        contact={contact}
        duration={duration}
        recruitField={recruitField}
        endDate={endDate}
      ></DetailSubContent>
      <hr
        style={{
          height: "2px",
          backgroundColor: "rgb(113, 113, 113)",
          border: "none",
        }}
      />
    </StudyContentContainer>
  );
};

// 모집 구분, 진행 방식, 모집 인원 ...
const DetailSubContent = ({
  langIndex,
  recruitType,
  progressMethod,
  recruitMember,
  contact,
  duration,
  recruitField,
  endDate,
}) => {
  // const [recruitType, setRecruitType] = useState(""); //모집구분
  // const [progressMethod, setProgressMethod] = useState(""); //진행방식
  // const [recruitMember, setRecruitMember] = useState(null); //모집인원
  // const [plan, setPlan] = useState(""); //시작예정
  // const [contact, setContact] = useState(""); //연락방법
  // const [duration, setDuration] = useState(null); //예상 기간
  // const [recruitField, setRecruitField] = useState([]); //모집 분야
  // const [language, setLanguage] = useState([]); //사용 언어 ex) spring

  return (
    <DetailSubContentContainer>
      <ul>
        <li>
          <span className="sub-title">모집 구분</span>
          <span className="sub-content">{recruitType}</span>
        </li>
        <li>
          <span className="sub-title">진행 방식</span>
          <span className="sub-content">{progressMethod}</span>
        </li>
        <li>
          <span className="sub-title">모집 인원</span>
          <span className="sub-content">{recruitMember}</span>
        </li>
        <li>
          <span className="sub-title">모집 마감일</span>
          <span className="sub-content">{endDate}</span>
        </li>
        <li>
          <span className="sub-title">연락 방법</span>
          <span className="sub-field">{contact}</span>
        </li>
        <li>
          <span className="sub-title">진행 기간</span>
          <span className="sub-content">{duration}</span>
        </li>
        <li>
          <span className="sub-title">모집 분야</span>
          {recruitField.map((field, index) => {
            return <span className="sub-field">{field}</span>;
          })}
        </li>
        <li>
          <span className="sub-title">사용 언어</span>
          {langIndex.map((index) => {
            // console.log("반복문 확인: " + index);
            return (
              <span style={{ display: 'inline-block', marginRight: '42px' }}>
              <img src={svgFiles[index]} alt="" style={{ width: '36px', height: '36px' }} />
            </span>
            );
          })}
        </li>
      </ul>
    </DetailSubContentContainer>
  );
};

export { DetailTitle, DetailSubContent };

// subContent css

const DetailSubContentContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 30px auto;
  border-top: 2px solid rgb(113, 113, 113);
  padding-top: 3%;
  justify-content: flex-start; /* 왼쪽 정렬을 설정합니다. */

  span {
    font-size: 20px;
  }
  ul {
    padding-left: 0; /* 기본적인 패딩을 제거합니다. */
  }

  li {
    position: relative;
    display: inline-block; /* li 요소를 인라인 블록 요소로 표시하여 한 줄에 두 개씩 나타나도록 함 */
    width: 48%; /* 부모 요소의 너비의 절반 크기로 설정하여 두 개씩 나란히 위치하도록 함 */
    margin-right: 2%; /* 각 li 요소 사이의 우측 여백 설정 */
    margin: 20px auto;
    text-align: left;
    box-sizing: border-box;
  }

  img {
  position: absolute; /* 이미지를 절대적으로 위치시킵니다. */
  top: 50%; /* 상위 요소의 중앙에 배치합니다. */
  transform: translateY(-50%); /* 세로 방향으로 50%만큼 이동하여 요소의 중앙에 배치합니다. */
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
`;

// title css
const StudyContentContainer = styled.div`
  /* height: 530px; */
  /* border: 1px solid black; */
  width: 50%;
  margin: 40px auto;
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

const DetailUserInfo = styled.div`
  margin: 25px 0 25px 0;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .username {
    font-weight: 700;
    font-size: 24px;
    margin-right: 18px;
    padding-left: 15px;
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

  .view-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 30px;

    img {
      width: 25px;
      height: 20px;
      background-color: #fff;
      opacity: 0.3;
      margin-right: 5px;
    }

    span {
      color: rgb(153, 153, 153);
      font-weight: 600;
    }
  }
`;

const DetailBackArrowImgArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
`;
