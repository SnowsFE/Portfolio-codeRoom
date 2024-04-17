import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const WriteBasicInfo1 = () => {
  // -------------------------------------------- axios 통신
  const [recruit, setRecruit] = useState([]);
  const [recruitment, setRecruitment] = useState([]);

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        // 백엔드에서 모집 구분 옵션 데이터를 가져오는 요청을 보냅니다.
        const response = await axios.get("/recruitment");
        setRecruitment(response.data);
      } catch (error) {
        console.error("모집 구분 옵션을 가져오는 중 오류 발생", error);
      }
    };

    const fetchRecruit = async () => {
      try {
        // 백엔드에서 모집 인원 옵션 데이터를 가져오는 요청을 보냅니다.
        const response = await axios.get("/recruit");
        setRecruit(response.data);
      } catch (error) {
        console.error("모집 인원 옵션을 가져오는 중 오류 발생", error);
      }
    };

    fetchRecruit();
    fetchRecruitment();
  }, []);
  // -------------------------------------------- axios 통신

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 구분</span>
        <div className="select-box">
          <StyledSelect
            name="recruitmentType"
            id="recruitmentType"
            className="select-bar"
          >
            <option value="" disabled selected>
              프로젝트 / 스터디
            </option>
            <option value="project">프로젝트</option>
            <option value="study">스터디</option>
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
          </StyledSelect>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo2 = () => {
  // -------------------------------------------- axios 통신
  const [Progress, setProgress] = useState([]);
  const [Duration, setDuration] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get("/progress");
        setProgress(response.data);
      } catch (error) {
        console.error("진행 방식 옵션을 가져오는 중 오류 발생", error);
      }
    };

    const fetchDuration = async () => {
      try {
        const response = await axios.get("/Duration");
        setDuration(response.data);
      } catch (error) {
        console.error("진행 기간 옵션을 가져오는 중 오류 발생", error);
      }
    };

    fetchProgress();
    fetchDuration();
  }, []);
  // -------------------------------------------- axios 통신

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">진행 방식</span>
        <div className="select-box">
          <StyledSelect
            name="processType"
            id="processType"
            className="select-bar"
          >
            <option value="" disabled selected>
              온라인 / 오프라인
            </option>
            <option value="online">온라인</option>
            <option value="offline">오프라인</option>
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
          </StyledSelect>
        </div>
      </div>
    </SelectArea>
  );
};

const WriteBasicInfo3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  // -------------------------------------------- axios 통신
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const fetchTechStackOptions = async () => {
      try {
        const response = await axios.get("/techStackOptions");
        setTechStackOptions(response.data);
      } catch (error) {
        console.error("기술 스택 옵션을 가져오는 중 오류 발생", error);
      }
    };

    const fetchDeadline = async () => {
      try {
        const response = await axios.get("/deadline");
        setDeadline(response.data.deadline);
      } catch (error) {
        console.error("마감일 옵션을 가져오는 중 오류 발생", error);
      }
    };

    fetchTechStackOptions();
    fetchDeadline();
  }, []);
  // -------------------------------------------- axios 통신

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
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };
  const handleRemoveOption = (option) => {
    const filteredOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(filteredOptions);
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
              <p>
                {selectedOptions.map((option, index) => (
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
                      selectedOptions.includes(option) ? "selected" : ""
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

const WriteBasicInfo4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // -------------------------------------------- axios 통신
  const [positions, setPositions] = useState([]);
  const [contactMethods, setContactMethods] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/positions");
        setPositions(response.data);
      } catch (error) {
        console.error("모집 포지션 옵션을 가져오는 중 오류 발생", error);
      }
    };

    const fetchContactMethods = async () => {
      try {
        const response = await axios.get("/contactMethods");
        setContactMethods(response.data);
      } catch (error) {
        console.error("연락 방법 옵션을 가져오는 중 오류 발생", error);
      }
    };

    fetchPositions();
    fetchContactMethods();
  }, []);
  // -------------------------------------------- axios 통신

  const options = ["프론트엔드", "백엔드", "디자이너", "기획자", "기타"];

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
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };

  const handleRemoveOption = (option) => {
    const filteredOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(filteredOptions);
  };

  return (
    <SelectArea>
      <div className="basic-info-box">
        <span className="info-title">모집 포지션</span>
        <div className="select-box">
          <div className="left-bar" onClick={toggleDropdown}>
            {selectedOptions.length > 0 ? (
              <p>
                {" "}
                {selectedOptions.map((option, index) => (
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
            <span className="dropdown-icon">🧶</span>{" "}
            {isOpen && (
              <div className="custom-dropdown">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`custom-option ${
                      selectedOptions.includes(option) ? "selected" : ""
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
        <span className="info-title">연락 방법</span>
        <div className="select-box">
          <StyledSelect
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
