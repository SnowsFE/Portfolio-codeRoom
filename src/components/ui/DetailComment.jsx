import { useState } from "react";
import styled from "styled-components";
import CodeRoomIcon from "../../img/CodeRoomIcon.png";

const DetailComment = () => {
  const [comments, setComments] = useState([]); //댓글 (댓글 작성자 + 댓글 작성 일자)

  return (
    <>
      <CommentContainer>
        <StyledTextArea
          name="input-comment"
          id=""
          cols="30"
          rows="10"
          placeholder="  댓글을 입력하세요"
        ></StyledTextArea>
        <button>댓글 등록</button>
      </CommentContainer>

      <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <hr />
      </Comments>
      <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <hr />
      </Comments>
      <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <hr />
      </Comments>
    </>
  );
};

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  /* border: 1px solid black; */
  button {
    width: 100px;
    height: 50px;
    margin: 20px 0 60px 830px;
    background-color: black;
    color: #fff;
    font-weight: 700;
    border-radius: 15px;
  }
`;

const StyledTextArea = styled.textarea`
  width: 55%;
  height: 130px;
  border-radius: 15px;
  outline: none;
  border: 2px solid grey;
  opacity: 0.3;
  &::placeholder {
    /* placeholder 스타일링 */
    color: #aaa; /* 원하는 색상으로 설정 */
    font-size: 20px;
  }
`;

const Comments = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;

  li {
    text-align: left;
    list-style: none;
  }

  .writer {
    font-weight: 700;
  }
  .write-dt {
    font-size: 14px;
    color: rgb(159, 159, 159);
    margin-bottom: 20px;
  }
  .comment {
    font-size: 18px;
    margin-bottom: 8px;
  }

  hr {
    height: 2px;
    background-color: rgb(113, 113, 113);
    border: none;
  }
  .writer-area {
    display: flex;
    flex-direction: row;
  }
`;

export default DetailComment;
