import styled from "styled-components";
import React, { useState, useEffect } from "react";

const WriteBasicInfo1 = ({
  onRecruitTypeChange,
  onRecruitMemberChange,
  selectedRecruitmentType,
  selectedRecruitmentCount,
}) => {
  const [recruitCount, setRecruitCount] = useState("");

  const RecruitTypeChange = (value) => {
    onRecruitTypeChange(value);
    console.log("모집 구분 변경:", value); // 모집 구분이 변경될 때 로그 출력
  };

  const MemberChange = (value) => {
    onRecruitMemberChange(value);
    console.log("모집 인원 변경:", value); // 모집 인원이 변경될 때 로그 출력
  };

  useEffect(() => {
    setRecruitCount(selectedRecruitmentCount);
  }, [recruitCount]);

  console.log("selectedRecruitmentCount: " + selectedRecruitmentCount);
  console.log("selectedRecruitmentType: " + selectedRecruitmentType);

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 구분</span>
        <div className="select-box">
          <StyledSelect
            name="recruitmentType"
            id="recruitmentType"
            className="select-bar"
            onChange={(e) => RecruitTypeChange(e.target.value)}
          >
            <option value="" disabled>
              프로젝트 / 스터디
            </option>
            <option
              value="프로젝트"
              selected={selectedRecruitmentType === "프로젝트"}
            >
              프로젝트
            </option>
            <option
              value="스터디"
              selected={selectedRecruitmentType === "스터디"}
            >
              스터디
            </option>
          </StyledSelect>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">모집 인원</span>
        <div className="select-box">
          <StyledSelect
            name="recruitmentCount"
            id="recruitmentCount"
            className="select-bar"
            onChange={(e) => MemberChange(e.target.value)}
          >
            <option value="" disabled>
              1명 ~ 10명 이상
            </option>
            <option value="1" selected={selectedRecruitmentCount === 1}>
              1명
            </option>
            <option value="2" selected={selectedRecruitmentCount === "2"}>
              2명
            </option>
            <option value="3" selected={selectedRecruitmentCount === "3"}>
              3명
            </option>
            <option value="4" selected={selectedRecruitmentCount === "4"}>
              4명
            </option>
            <option value="5" selected={selectedRecruitmentCount === "5"}>
              5명
            </option>
            <option value="6" selected={selectedRecruitmentCount === "6"}>
              6명
            </option>
            <option value="7" selected={selectedRecruitmentCount === "7"}>
              7명
            </option>
            <option value="8" selected={selectedRecruitmentCount === "8"}>
              8명
            </option>
            <option value="9" selected={selectedRecruitmentCount === "9"}>
              9명
            </option>
            <option value="10+" selected={selectedRecruitmentCount === "10+"}>
              10명 이상
            </option>
          </StyledSelect>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo2 = ({
  onProgressChange,
  onDurationChange,
  selectedProcessType,
  selectedProcessDuration,
}) => {
  const ProgressChange = (value) => {
    onProgressChange(value);
    console.log("진행 방식 변경:", value); // 진행 방식이 변경될 때 로그 출력
  };

  const DurationChange = (value) => {
    onDurationChange(value);
    console.log("진행 기간 변경:", value); // 진행 기간이 변경될 때 로그 출력
  };

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">진행 방식</span>
        <div className="select-box">
          <StyledSelect
            name="processType"
            id="processType"
            className="select-bar"
            onChange={(e) => ProgressChange(e.target.value)}
          >
            <option value="" disabled>
              온라인 / 오프라인
            </option>
            <option value="온라인" selected={selectedProcessType === "온라인"}>
              온라인
            </option>
            <option
              value="오프라인"
              selected={selectedProcessType === "오프라인"}
            >
              오프라인
            </option>
          </StyledSelect>
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">진행 기간</span>
        <div className="select-box">
          <StyledSelect
            name="processDuration"
            id="processDuration"
            className="select-bar"
            onChange={(e) => DurationChange(e.target.value)}
          >
            <option value="" disabled>
              기간 미정 ~ 6개월 이상
            </option>
            <option
              value="undecided"
              selected={selectedProcessDuration === "기간 미정"}
            >
              기간 미정
            </option>
            <option
              value="1개월"
              selected={selectedProcessDuration === "1개월"}
            >
              1개월
            </option>
            <option
              value="2개월"
              selected={selectedProcessDuration === "2개월"}
            >
              2개월
            </option>
            <option
              value="3개월"
              selected={selectedProcessDuration === "3개월"}
            >
              3개월
            </option>
            <option
              value="4개월"
              selected={selectedProcessDuration === "4개월"}
            >
              4개월
            </option>
            <option
              value="5개월"
              selected={selectedProcessDuration === "5개월"}
            >
              5개월
            </option>
            <option
              value="6개월"
              selected={selectedProcessDuration === "6개월"}
            >
              6개월
            </option>
          </StyledSelect>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo3 = ({
  onEndDateChange,
  onLanguagesChange,
  language,
  endDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  // console.log("endDate: " + endDate);

  useEffect(() => {
    setSelectedDate(endDate.replace(/\./g, "-"));
    // console.log("in useEffect selectedDate: " + selectedDate);
    // console.log("in useEffect endDate: " + endDate);
  }, [endDate]);

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
    if (language.includes(option)) {
      const filteredOptions = language.filter(
        (selectedOption) => selectedOption !== option
      );
      onLanguagesChange(filteredOptions);
    } else {
      if (language.length < 3) {
        onLanguagesChange([...language, option]);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };
  const handleRemoveOption = (option) => {
    const filteredOptions = language.filter(
      (selectedOption) => selectedOption !== option
    );
    onLanguagesChange(filteredOptions);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onEndDateChange(event.target.value);
  };

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">기술 스택</span>
        <div className="select-box">
          <div className="left-bar" onClick={toggleDropdown}>
            {language.length > 0 ? (
              <p>
                {language.map((option, index) => (
                  <SelectedOptionBox key={index}>
                    <code>{option}</code>
                    <span
                      onClick={() => handleRemoveOption(option)}
                      style={{ cursor: "pointer" }}
                    >
                      ✖️
                    </span>
                  </SelectedOptionBox>
                ))}
              </p>
            ) : (
              <p>프로젝트 사용기술</p>
            )}
            <span className="dropdown-icon">🧶</span>{" "}
            {isOpen && (
              <div className="custom-dropdown">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`custom-option ${
                      language.includes(option) ? "selected" : ""
                    }`}
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

const WriteBasicInfo4 = ({
  onContactChange,
  recruitField,
  onRecruitTypeChange,
  contact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState("");

  const options = ["프론트엔드", "백엔드", "디자이너", "기획자", "기타"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setContactMethod(contact);
  }, []);

  const handleOptionClick = (option) => {
    if (recruitField.includes(option)) {
      const filteredOptions = recruitField.filter(
        (selectedOption) => selectedOption !== option
      );
      onRecruitTypeChange(filteredOptions);
    } else {
      if (recruitField.length < 3) {
        onRecruitTypeChange([...recruitField, option]);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };

  const handleRemoveOption = (option) => {
    const filteredOptions = recruitField.filter(
      (selectedOption) => selectedOption !== option
    );
    onRecruitTypeChange(filteredOptions);
  };

  const handleContactMethodChange = (value) => {
    setContactMethod(value);
    onContactChange(value);
  };

  // 선택된 옵션이 변경될 때마다 onRecruitTypeChange 호출
  // useEffect(() => {
  //   onRecruitTypeChange(recruitField);
  //   console.log("모집 포지션 변경:", recruitField); // 모집 포지션 변경 시 로그 출력
  // }, [recruitField]);

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 포지션</span>
        <div className="select-box">
          <div className="left-bar" onClick={toggleDropdown}>
            {recruitField.length > 0 ? (
              <p>
                {recruitField.map((option, index) => (
                  <SelectedOptionBox key={index}>
                    <code>{option}</code>
                    <span
                      onClick={() => handleRemoveOption(option)}
                      style={{ cursor: "pointer" }}
                    >
                      ✖️
                    </span>
                  </SelectedOptionBox>
                ))}
              </p>
            ) : (
              <p>포지션을 선택하세요</p>
            )}
            <span className="dropdown-icon">🧶</span>
          </div>
          {isOpen && (
            <div className="custom-dropdown">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`custom-option ${
                    recruitField.includes(option) ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="basic-info-box">
        <span className="info-title">연락 방법</span>
        <div className="select-box">
          <StyledSelect
            name="contactMethod"
            id="contactMethod"
            className="select-bar"
            value={contact}
            onChange={(e) => handleContactMethodChange(e.target.value)}
          >
            <option value="" disabled>
              카카오톡 오픈채팅..
            </option>
            <option value="오픈톡" selected={contact === "오픈톡"}>
              오픈톡
            </option>
            <option value="이메일" selected={contact === "이메일"}>
              이메일
            </option>
            <option value="구글 폼" selected={contact === "구글 폼"}>
              구글 폼
            </option>
          </StyledSelect>
        </div>
      </div>
    </SelectArea>
  );
};

export { WriteBasicInfo1, WriteBasicInfo2, WriteBasicInfo3, WriteBasicInfo4 };

const SelectedOptionBox = styled.span`
  background-color: #d5ffd5; /* 연한 초록색 배경 */
  margin-right: 10px; /* 우측 마진 */
  border-radius: 5px; /* 모서리 둥글게 */
  padding: 7px;
  align-items: center;
  border: 1px solid #14cc14;

  span {
    margin-left: 3px;
  }
`;

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
    text-align: left;
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

  .left-bar {
    width: 396px;
    height: 53px;
    padding: 0 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 13px;
    margin-bottom: 10px;
    background-color: #fff; /* 흰색 배경 추가 */
    &:hover {
      background-color: #d5ffd5;
    }
  }

  .right-bar,
  #date {
    width: 396px;
    height: 53px;
    padding: 0 15px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 13px;
    margin-bottom: 10px;
    &:hover {
      background-color: #d5ffd5;
    }
    &:focus {
      outline: none;
      border-color: #14cc14;
    }
  }

  .custom-dropdown {
    position: absolute;
    top: 95%;
    left: 0%;
    width: 99.6%;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #cccccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 1000;
    cursor: pointer;
  }

  p {
    text-align: left;
    font-size: 14px;
    margin-top: 16px;
    cursor: pointer;
  }

  .custom-option {
    color: #000;
    padding: 10px;
    transition: background-color 0.3s ease;
  }

  .custom-option:hover:not(.selected) {
    background-color: #d5ffd5;
  }

  .custom-option.selected {
    background-color: #14cc14;
    color: #fff;
  }

  .dropdown-icon {
    position: absolute;
    margin-left: 43%;
    margin-top: -8%;
    cursor: pointer;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  color: #000;
  font-size: 13px;

  &:hover {
    background-color: #d5ffd5;
  }

  &:focus {
    outline: none;
    border-color: #14cc14;
  }

  option {
    color: #000;
    background-color: #fff;
  }

  option:checked {
    background-color: #14cc14;
    color: #fff;
  }
`;
