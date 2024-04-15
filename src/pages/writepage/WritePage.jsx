import styled from "styled-components";
import {
  WriteBasicInfo1,
  WriteBasicInfo2,
  WriteBasicInfo3,
  WriteBasicInfo4,
} from "../../components/ui/WriteBasicInfo";
import Nav from "../../components/ui/Nav.jsx";
import { useNavigate } from "react-router-dom";
import UpScroll from "../../components/ui/UpScroll.jsx";

const WritePage = () => {
  const navigate = useNavigate();

  // 글 등록 완료 후 메인 페이지로 이동하는 함수
  const handleWriteComplete = () => {
    // 여기에 글 등록이 완료되었다는 알림 메시지를 띄우는 코드를 넣을 수도 있습니다.
    alert("글이 성공적으로 등록되었습니다!");
    navigate("/");
  };

  // 취소 버튼 클릭 시 확인 메시지 띄우고 취소 여부에 따라 동작하는 함수
  const handleCancel = () => {
    const isConfirmed = window.confirm("작성을 취소하시겠습니까?");
    if (isConfirmed) {
      navigate("/");
    }
  };

  return (
    <>
      <Nav />
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
    opacity: 0.5;
  }

  textarea {
    width: 100%;
    height: 430px;
    border-radius: 15px;
    outline: none;
    border: 2px solid grey;
    opacity: 0.5;

    &::placeholder {
      color: #aaa;
      font-size: 18px;
      font-style: italic;
    }
  }

  .button-area {
    display: flex;
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
`;

export default WritePage;
