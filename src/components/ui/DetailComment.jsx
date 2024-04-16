import { useState } from "react";
import styled from "styled-components";
import CodeRoomIcon from "../../img/CodeRoomIcon.png";

const DetailComment = () => {
  const [comments, setComments] = useState([]); //댓글 (댓글 작성자 + 댓글 작성 일자)
  const [comment, setComment] = useState(""); //사용자가 작성하는 댓글

  let sampleComments = [
    { writer: "1번", writeDt: "2024.01.01", comment: "댓글 1번" },
    { writer: "2번", writeDt: "2024.01.01", comment: "댓글 2번" },
    { writer: "3번", writeDt: "2024.01.01", comment: "댓글 3번" },
  ];

  return (
    <>
      <CommentContainer>
        <CommentStyledTextArea
          name="input-comment"
          id=""
          cols="30"
          rows="10"
          placeholder="댓글을 입력하세요"
          onChange={(e) => setComment(e)}
        ></CommentStyledTextArea>
        <button>댓글 등록</button>
      </CommentContainer>

      {sampleComments.map((comment, index) => {
        return (
          <Comments>
            <div className="writer-area">
              <img src={CodeRoomIcon} alt="" />
              <li className="writer">{comment.writer}</li>
            </div>
            <li className="write-dt">{comment.writeDt} </li>
            <li className="comment">{comment.comment} </li>
            <div>
              <Underline />
            </div>
          </Comments>
        );
      })}

      {/* <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <div>
          <Underline />
        </div>
      </Comments>
      <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <div>
          <Underline />
        </div>
      </Comments>
      <Comments>
        <div className="writer-area">
          <img src={CodeRoomIcon} alt="" />
          <li className="writer">작성자</li>
        </div>
        <li className="write-dt">작성일자 </li>
        <li className="comment">댓글 내용 </li>
        <div>
          <Underline />
        </div>
      </Comments> */}
    </>
  );
};

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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

const CommentStyledTextArea = styled.textarea`
  width: 55%;
  height: 130px;
  border-radius: 15px;
  outline: none;
  border: 2px solid grey;
  font-size: 20px; /*작성 댓글 크기*/
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

  .writer-area {
    display: flex;
    flex-direction: row;
  }
`;

const Underline = styled.hr`
  height: 2px;
  background-color: rgb(113, 113, 113);
  border: none;
  opacity: 0.2;
`;

export default DetailComment;
