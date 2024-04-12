import styled from "styled-components";
import {
  WriteBasicInfo1,
  WriteBasicInfo2,
  WriteBasicInfo3,
  WriteBasicInfo4,
} from "../../components/ui/WriteBasicInfo";
import CodeRoomIcon from "../../img/CodeRoomIcon.png";

const WritePage = () => {
  return (
    <BasicInfoContainer>
      <h2> 프로젝트 기본 정보를 입력해주세요.</h2>
      <hr />
      <WriteBasicInfo1></WriteBasicInfo1>
      <WriteBasicInfo2></WriteBasicInfo2>
      <WriteBasicInfo3></WriteBasicInfo3>
      <WriteBasicInfo4></WriteBasicInfo4>
      <h2>프로젝트에 대해 소개해주세요</h2>
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
          <button id="cancel-btn" className="body-btn">
            취소
          </button>
          <button id="write-btn" className="body-btn">
            글등록
          </button>
        </div>
      </BodyInfoContainer>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.section`
  position: relative;
  height: 640px;
  width: 53%;
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

// 본문 내용 관련 css
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
      /* placeholder 스타일링 */
      color: #aaa; /* 원하는 색상으로 설정 */
      font-size: 18px;
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
