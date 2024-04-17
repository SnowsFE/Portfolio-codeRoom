import styled from "styled-components";

import {
  WriteBasicInfo1,
  WriteBasicInfo2,
  WriteBasicInfo3,
  WriteBasicInfo4,
} from "../../components/ui/WriteBasicInfoUpdate.jsx";
import LoginNav from "../../components/ui/LoginNav.jsx";
import { useNavigate, useParams } from "react-router-dom";
import UpScroll from "../../components/ui/UpScroll.jsx";

const UpdatePage = () => {
  const navigate = useNavigate();
  let param = useParams(); //게시판 아이디는 param.id 로 접근

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
            <CancelButton id="cancel-btn" className="body-btn">
              취소
            </CancelButton>
            <WriteButton id="write-btn" className="body-btn">
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

export default UpdatePage;
