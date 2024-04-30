import styled from "styled-components";
import React, { useEffect, useState } from "react";

import {
  WriteBasicInfo1,
  WriteBasicInfo2,
  WriteBasicInfo3,
  WriteBasicInfo4,
} from "../../components/ui/WriteBasicInfoUpdate.jsx";
import LoginNav from "../../components/ui/LoginNav.jsx";
import { useNavigate, useParams } from "react-router-dom";
import UpScroll from "../../components/ui/UpScroll.jsx";
import axios from "axios";

const UpdatePage = () => {
  const navigate = useNavigate();
  let param = useParams(); //게시판 아이디는 param.id 로 접근

  const [title, setTitle] = useState(""); //제목
  const [writer, setWriter] = useState(""); //작성자

  const [recruitType, setRecruitType] = useState([]); //모집구분
  const [progress, setProgress] = useState(""); //진행방식
  const [recruitMember, setRecruitMember] = useState(""); //모집인원
  const [endDate, setEndDate] = useState(""); //모집 마감일
  const [contact, setContact] = useState(""); //연락방법
  const [duration, setDuration] = useState(""); //예상 기간
  const [categories, setcategories] = useState([]); //모집 분야
  const [language, setLanguage] = useState([]); //사용 언어 ex) spring
  const [content, setContent] = useState(""); //본문 내용

  // Todo update시 수정하고자 하는 게시판의 기존 데이터 가져오기 (서버 통신)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/boards/${param.id}`);
      console.log("update data: " + res.data.postresult[0].recruitmember);
      setTitle(res.data.postresult[0].title);
      setWriter(res.data.postresult[0].username);
      setRecruitType(res.data.postresult[0].recruittype);
      setProgress(res.data.postresult[0].progress);
      setRecruitMember(res.data.postresult[0].recruitmember);
      setContact(res.data.postresult[0].contact);
      setDuration(res.data.postresult[0].duration);
      setcategories(res.data.postresult[0].recruitFields);
      setLanguage(res.data.postresult[0].languages);
      setEndDate(res.data.postresult[0].enddate); //Todo
      setContent(res.data.postresult[0].content);
    };
    getData();
  }, []);

  const handleWriteComplete = async () => {
    const postData = {
      recruittype: recruitType,
      recruitmember: recruitMember,
      progress,
      duration,
      categories: categories,
      enddate: endDate,
      languages: language,
      contact,
      title,
      content,
    };

    console.log("전송될 데이터:", postData); // 데이터를 콘솔에 출력

    try {
      const res = await axios.put(`/boards/postmodify/${param.id}`, postData);
      alert("글이 성공적으로 수정되었습니다!");
      navigate(`/boards/${param.id}`);
    } catch (error) {
      console.error("글 등록 중 오류 발생:", error);
      alert("글 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  // 취소 버튼 클릭 시 확인 메시지 띄우고 취소 여부에 따라 동작하는 함수
  const handleCancel = () => {
    const isConfirmed = window.confirm("작성을 취소하시겠습니까?");
    if (isConfirmed) {
      navigate("/");
    }
  };

  // 제목과 내용을 업데이트하는 함수
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("제목:", e.target.value); // 입력된 제목을 콘솔에 출력
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    console.log("본문 내용:", e.target.value); // 입력된 본문 내용을 콘솔에 출력
  };

  return (
    <>
      <LoginNav />
      <UpScroll />
      <BasicInfoContainer>
        <h2>모집 정보</h2>
        <hr />
        <WriteBasicInfo1
          onRecruitTypeChange={setRecruitType}
          onRecruitMemberChange={setRecruitMember}
          selectedRecruitmentType={recruitType}
          selectedRecruitmentCount={recruitMember}
        />
        <WriteBasicInfo2
          onProgressChange={setProgress}
          onDurationChange={setDuration}
          selectedProcessType={progress}
          selectedProcessDuration={duration}
        />
        <WriteBasicInfo3
          onEndDateChange={setEndDate}
          onLanguagesChange={setLanguage}
          language={language}
          endDate={endDate}
        />
        <WriteBasicInfo4
          categories={categories}
          contact={contact}
          onContactChange={setContact}
          onCategoryChange={setcategories}
        />
        <h2>글작성</h2>
        <hr />
        <BodyInfoContainer>
          <h6>제목</h6>
          <input
            type="text"
            placeholder="제목을 입력해주세요!"
            id="title-input"
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="프로젝트를 소개해주세요"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <div className="button-area">
            <CancelButton
              id="cancel-btn"
              className="body-btn"
              onClick={handleCancel}
            >
              취소
            </CancelButton>
            <WriteButton
              id="write-btn"
              className="body-btn"
              onClick={handleWriteComplete}
            >
              글등록
            </WriteButton>
          </div>
        </BodyInfoContainer>
      </BasicInfoContainer>
    </>
  );
};

const BasicInfoContainer = styled.section`
  position: relative;
  height: 640px;
  width: 53%;
  min-width: 1280px;
  min-width: 1000px;
  margin: 0 auto;

  h2 {
    text-align: left;
    font-size: 24px;
  }

  hr {
    height: 2px;
    background-color: rgb(113, 113, 113);
    border: none;
    margin-bottom: 30px;
  }
`;

// 본문 내용 관련 css-
const BodyInfoContainer = styled.section`
  h6 {
    text-align: left;
    font-size: 20px;
  }
  #title-input {
    width: 100%;
    height: 52px;
    margin-bottom: 30px;
    border-radius: 15px;
    outline: none;
    border: 2px solid #ccc; /* 회색 테두리 */
    background-color: #f5f5f5; /* 회색 배경 */
    font-size: 15px;
    padding: 10px; /* 내부 여백 추가 */
    font-family: "Noto Sans KR", sans-serif;
  }

  textarea {
    width: 100%;
    height: 430px;
    border-radius: 15px;
    outline: none;
    border: 2px solid #ccc; /* 회색 테두리 */
    background-color: #f5f5f5; /* 회색 배경 */
    font-size: 16px;
    padding: 10px; /* 내부 여백 추가 */

    font-family: "Noto Sans KR", sans-serif;

    &::placeholder {
      /* placeholder 스타일링 */
      color: #aaa;
      font-size: 16px;
    }
  }

  .button-area {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 15px;
  }

  .body-btn {
    width: 80px;
    height: 50px;
    border: none;
    margin-bottom: 2%;
    cursor: pointer;
  }
`;

// 버튼에 호버 효과와 색상 적용
const CancelButton = styled.button`
  background-color: rgb(233, 236, 239);
  border-radius: 5px;
  &:hover {
    background-color: #c4c4c4;
  }
`;

const WriteButton = styled.button`
  background-color: black;
  color: #fff;
  border-radius: 5px;
  margin-left: 15px;
  &:hover {
    background-color: #333;
  }

  #cancel-btn {
    background-color: rgb(233, 236, 239);
    border-radius: 5px;
  }

  #write-btn {
    background-color: black;
    color: #fff;
    border-radius: 5px;
    margin-left: 15px;
  }
`;

export default UpdatePage;
