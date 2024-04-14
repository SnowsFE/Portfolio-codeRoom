import styled from "styled-components";
import React, { useState } from "react";

const WriteBasicInfo1 = () => {
  return (
    <SelectArea1>
      <div className="basic-info-title">
        <span
          className="title1 title"
          style={{
            marginRight: "10px",
            marginBottom: 20,
            display: "inline-block",
            textAlign: "center",
          }}
        >
          모집 구분
        </span>
        <span
          className="title2 title"
          style={{
            marginLeft: "390px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          모집 인원
        </span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            프로젝트 / 스터디
          </option>
          <option value="">프로젝트</option>
          <option value="">스터디</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            인원 미정 ~ 10명 이상
          </option>
          <option value="">1명</option>
          <option value="">2명</option>
          <option value="">3명</option>
          <option value="">4명</option>
          <option value="">5명</option>
          <option value="">6명</option>
          <option value="">7명</option>
          <option value="">8명</option>
          <option value="">9명</option>
          <option value="">10명 이상</option>
        </select>
      </div>
    </SelectArea1>
  );
};

const WriteBasicInfo2 = () => {
  return (
    <SelectArea1>
      <div className="basic-info-title">
        <span
          className="title1 title"
          style={{
            marginRight: "10px",
            marginBottom: 20,
            display: "inline-block",
            textAlign: "center",
          }}
        >
          진행 방식
        </span>
        <span
          className="title2 title"
          style={{
            marginLeft: "390px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          진행 기간
        </span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            온라인 / 오프라인
          </option>
          <option value="">온라인</option>
          <option value="">오프라인</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            기간 미정 ~ 6개월 이상
          </option>
          <option value="">기간 미정</option>
          <option value="">1개월</option>
          <option value="">2개월</option>
          <option value="">3개월</option>
          <option value="">4개월</option>
          <option value="">5개월</option>
          <option value="">6개월</option>
        </select>
      </div>
    </SelectArea1>
  );
};

const WriteBasicInfo3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  return (
    <SelectArea2>
      <div className="basic-info-title">
        <span
          className="title1 title"
          style={{
            marginRight: "7px",
            marginBottom: 20,
            display: "inline-block",
            textAlign: "center",
          }}
        >
          기술 스택
        </span>
        <span
          className="title2 title"
          style={{
            marginLeft: "398px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          모집 마감일
        </span>
      </div>
      <div className="select-box">
        <div className="left-bar">
          <div onClick={toggleDropdown}>
            {selectedOptions.length > 0 ? (
              <p>{selectedOptions.join(", ")}</p>
            ) : (
              <p>프로젝트 사용기술</p>
            )}
          </div>
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
        <div>
          <input placeholder="Date" type="date" id="date" />
        </div>
      </div>
    </SelectArea2>
  );
};

const WriteBasicInfo4 = () => {
  return (
    <SelectArea1>
      <div className="basic-info-title">
        <span
          className="title1 title"
          style={{
            marginRight: "10px",
            marginBottom: 20,
            display: "inline-block",
            textAlign: "center",
          }}
        >
          모집 포지션
        </span>
        <span
          className="title2 title"
          style={{
            marginLeft: "390px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          연락 방법
        </span>
      </div>
      <div className="select-box">
        <select name="languages" id="lang" className="left-bar">
          <option value="" disabled selected>
            프론트엔드, 백엔드...
          </option>
          <option value="">프론트엔드</option>
          <option value="">백엔드</option>
          <option value="">디자이너</option>
          <option value="">기획자</option>
          <option value="">기타</option>
        </select>
        <select name="languages" id="lang" className="right-bar">
          <option value="" disabled selected>
            카카오톡 오픈채팅..
          </option>
          <option value="">오픈톡</option>
          <option value="">이메일</option>
          <option value="">구글 폼</option>
        </select>
      </div>
    </SelectArea1>
  );
};

export { WriteBasicInfo1, WriteBasicInfo2, WriteBasicInfo3, WriteBasicInfo4 };

const SelectArea1 = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  .select-box {
    display: flex;
    flex-direction: row;
    justify-content: center; /* 수평 가운데 정렬 */
    gap: 30px;
  }
  .left-bar,
  .right-bar,
  #date {
    width: 428px; /* 넓이 설정 */
    height: 55px; /* 높이 설정 */
    padding: 0 15px; /* 내부 여백 */
    border: 1px solid #ccc; /* 테두리 색상 */
    border-radius: 8px; /* 테두리 둥글기 */
    font-size: 16px; /* 글꼴 크기 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    margin-bottom: 10px; /* 박스 간 여백 */
    text-align: center;
  }
  .custom-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% - 2px); /* 드롭다운 넓이 */
    max-height: 200px; /* 최대 높이 설정 */
    overflow-y: auto; /* 스크롤 가능하도록 */
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 1000;
  }
  .custom-option {
    padding: 8px 12px;
    cursor: pointer;
  }
  .custom-option:hover {
    background-color: #f4f4f4;
  }
`;

const SelectArea2 = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  .select-box {
    display: flex;
    flex-direction: row;
    justify-content: center; /* 수평 가운데 정렬 */
    gap: 60px;
  }
  .left-bar,
  .right-bar,
  #date {
    width: 396px; /* 넓이 설정 */
    height: 53px; /* 높이 설정 */
    padding: 0 15px; /* 내부 여백 */
    border: 1px solid #ccc; /* 테두리 색상 */
    border-radius: 8px; /* 테두리 둥글기 */
    font-size: 16px; /* 글꼴 크기 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    margin-bottom: 10px; /* 박스 간 여백 */
    text-align: center;
  }
  .custom-dropdown {
    position: absolute;
    top: 60%;
    left: 5%;
    width: 43%; /* 드롭다운 넓이 */
    max-height: 200px; /* 최대 높이 설정 */
    overflow-y: auto; /* 스크롤 가능하도록 */
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 1000;
  }
  .custom-option {
    padding: 8px 12px;
    cursor: pointer;
  }
  .custom-option:hover {
    background-color: #f4f4f4;
  }
`;
