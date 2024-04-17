import styled from "styled-components";

import {
  WriteBasicInfo1,
  WriteBasicInfo2,
  WriteBasicInfo3,
  WriteBasicInfo4,
} from "../../components/ui/WriteBasicInfo";
import LoginNav from "../../components/ui/LoginNav.jsx";
import { useNavigate } from "react-router-dom";
import UpScroll from "../../components/ui/UpScroll.jsx";
import axios from "axios";

const WritePage = () => {
  // -------------------------------------------- axios 통신
  const navigate = useNavigate();

  const handleWriteComplete = async () => {
    const recruitment = document.getElementById("recruitment").value; // 모집 구분
    const recruit = document.getElementById("recruit").value; // 모집 인원
    const Progress = document.getElementById("Progress").value; // 진행 방식
    const Duration = document.getElementById("Duration").value; // 진행 기간
    const techStack = WriteBasicInfo3.selectedOptions; //  기술 스택
    const deadline = WriteBasicInfo3.selectedDate; // 모집 마감일
    const positions = WriteBasicInfo4.selectedOptions; // 모집 포지션
    const contactMethod = document.getElementById("contactMethod").value; // 연락 방법

    const postData = {
      recruitment,
      recruit,
      Progress,
      Duration,
      techStack,
      deadline,
      positions,
      contactMethod,
    };

    try {
      // 데이터를 백엔드로 전송
      const response = await axios.post("/write", postData);
      // 성공적으로 등록되었을 때의 처리
      alert("글이 성공적으로 등록되었습니다!");
      navigate("/");
    } catch (error) {
      // 등록 실패 시의 처리
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
  // -------------------------------------------- axios 통신

  return (
    <>
      <LoginNav />
      <UpScroll />
      <BasicInfoContainer>
        <h2>모집 정보</h2>
        <hr />
        <WriteBasicInfo1 />
        <WriteBasicInfo2 />
        <WriteBasicInfo3 />
        <WriteBasicInfo4 />
        <h2>글작성</h2>
        <hr />
        <BodyInfoContainer>
          <h6>제목</h6>
          <input
            type="text"
            placeholder="제목을 입력해주세요!"
            id="title-input"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="프로젝트를 소개해주세요"
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
  /* border: solid 1px black; */
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
    border: 2px solid grey;
    font-style: italic;
    font-size: 15px;
    opacity: 0.5;
  }

  textarea {
    width: 100%;
    height: 430px;
    border-radius: 15px;
    outline: none;
    border: 2px solid grey;
    font-size: 20px;
    opacity: 0.5;

    &::placeholder {
      /* placeholder 스타일링 */
      color: #aaa;
      font-size: 20px;
      font-style: italic;
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

export default WritePage;
