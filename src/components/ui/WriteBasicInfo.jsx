import styled from "styled-components";
import React, { useState } from "react";

const WriteBasicInfo1 = () => {
  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 구분</span>
        <div className="select-box">
          <select
            name="recruitmentType"
            id="recruitmentType"
            className="select-bar"
          >
            <option value="" disabled selected>
              프로젝트 / 스터디
            </option>
            <option value="project">프로젝트</option>
            <option value="study">스터디</option>
          </select>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">모집 인원</span>
        <div className="select-box">
          <select
            name="recruitmentCount"
            id="recruitmentCount"
            className="select-bar"
          >
            <option value="" disabled selected>
              인원 미정 ~ 10명 이상
            </option>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명</option>
            <option value="6">6명</option>
            <option value="7">7명</option>
            <option value="8">8명</option>
            <option value="9">9명</option>
            <option value="10+">10명 이상</option>
          </select>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo2 = () => {
  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">진행 방식</span>
        <div className="select-box">
          <select name="processType" id="processType" className="select-bar">
            <option value="" disabled selected>
              온라인 / 오프라인
            </option>
            <option value="online">온라인</option>
            <option value="offline">오프라인</option>
          </select>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">진행 기간</span>
        <div className="select-box">
          <select
            name="processDuration"
            id="processDuration"
            className="select-bar"
          >
            <option value="" disabled selected>
              기간 미정 ~ 6개월 이상
            </option>
            <option value="undecided">기간 미정</option>
            <option value="1">1개월</option>
            <option value="2">2개월</option>
            <option value="3">3개월</option>
            <option value="4">4개월</option>
            <option value="5">5개월</option>
            <option value="6">6개월</option>
          </select>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const options = [
    "JavaScript",
    "React",
    "Vue",
    "TypeScript",
    "Next.js",
    "Svelte",
    "Swift",
    "React Native",
    "Figma",
    "Zeplin",
    "Node.js",
    "Express",
    "Django",
    "Spring",
    "Java",
    "Go",
    "PHP",
    "Python",
    "NestJS",
    "GraphQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Firebase",
    "Unity",
    "Aws",
    "Git",
    "C",
    "Kotlin",
    "Flutter",
    "Jest",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      const filteredOptions = selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
      setSelectedOptions(filteredOptions);
    } else {
      if (selectedOptions.length < 5) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        alert("최대 5개까지만 선택할 수 있습니다.");
      }
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">기술 스택</span>
        <div className="select-box">
          <div className="left-bar" onClick={toggleDropdown}>
            {selectedOptions.length > 0 ? (
              <p>{selectedOptions.join(", ")}</p>
            ) : (
              <p>프로젝트 사용기술</p>
            )}
            {isOpen && (
              <div className="custom-dropdown">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="custom-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">모집 마감일</span>
        <div className="select-box">
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo4 = () => {
  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 포지션</span>
        <div className="select-box">
          <select name="positions" id="positions" className="select-bar">
            <option value="" disabled selected>
              프론트엔드, 백엔드...
            </option>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
            <option value="designer">디자이너</option>
            <option value="planner">기획자</option>
            <option value="etc">기타</option>
          </select>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">연락 방법</span>
        <div className="select-box">
          <select
            name="contactMethod"
            id="contactMethod"
            className="select-bar"
          >
            <option value="" disabled selected>
              카카오톡 오픈채팅..
            </option>
            <option value="opentalk">오픈톡</option>
            <option value="email">이메일</option>
            <option value="googleform">구글 폼</option>
          </select>
        </div>
      </div>
    </SelectArea>
  );
};

export { WriteBasicInfo1, WriteBasicInfo2, WriteBasicInfo3, WriteBasicInfo4 };

const SelectArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  margin-top: 5%;

  .basic-info-box {
    margin-right: 20px;
    text-align: center;
  }

  .info-title {
    display: block;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .select-box {
    width: 428px;
    min-width: 428px;
    max-width: 428px;
    display: inline-block;
    position: relative;
  }

  .select-bar {
    width: 100%;
    height: 55px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  .left-bar,
  .right-bar,
  #date {
    width: 396px; /* 넓이 설정 */
    height: 53px; /* 높이 설정 */
    padding: 0 15px; /* 내부 여백 */
    border: 1px solid #ccc; /* 테두리 색상 */
    border-radius: 5px; /* 테두리 둥글기 */
    font-size: 13px; /* 글꼴 크기 */
    margin-bottom: 10px; /* 박스 간 여백 */
  }
  .custom-dropdown {
    position: absolute;
    top: 80%;
    left: 0%;
    width: 99.4%; /* 드롭다운 넓이 */
    max-height: 200px; /* 최대 높이 설정 */
    overflow-y: auto; /* 스크롤 가능하도록 */
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 1000;
  }

  p {
    text-align: left;
    font-size: 14px;
    margin-top: 16px;
  }
`;
