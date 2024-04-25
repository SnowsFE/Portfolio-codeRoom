import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CodeRoomIcon from "../../img/CodeRoomIcon.png";

const DetailComment = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]); //댓글 (댓글 작성자 + 댓글 작성 일자)
  const [comment, setComment] = useState(""); //사용자가 작성하는 댓글
  let param = useParams(); //게시판 아이디는 param.id 로 접근
  const navigator = useNavigate();

  // 댓글 추가 함수
  const addComment = (c) => {
    console.log("addComment: " + c);
    let copy = [...comments];
    copy.push(c);
    setComments(copy);
  };

  // 댓글 작성 (서버와 통신)
  const commentHandler = async (e) => {
    try {
      const res = await axios.post(`/boards/${param.id}`, {
        comment,
      });
      // 댓글 작성 성공시 해당 게시판으로 리다이랙트
      alert("댓글이 성공적으로 등록되었습니다!"); // 댓글 등록 추가
      addComment(comment);
      window.location.reload();
    } catch (e) {
      if (e.response && e.response.status === 401) {
        alert("로그인을 한 회원만 댓글을 작성할 수 있습니다!");
      }
    }
  };

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
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></CommentStyledTextArea>
        <button onClick={() => commentHandler()}>댓글 등록</button>
      </CommentContainer>

      {/* 댓글 보여주기 */}
      {comments.map((comment, index) => {
        return (
          <Comments>
            <div className="writer-area">
              <img src={CodeRoomIcon} alt="" />
              <li className="writer">{comment.username}</li>
            </div>
            <li className="write-dt">{comment.createdate} </li>
            <li className="comment">{comment.content} </li>
            <div>
              <Underline />
            </div>
          </Comments>
        );
      })}
    </>
  );
};

export default DetailComment;

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
    margin-left: 45.2%;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const CommentStyledTextArea = styled.textarea`
  min-width: 600px;
  width: 50%;
  height: 130px;
  border-radius: 15px;
  outline: none;
  border: 2px solid grey;
  font-size: 16px; /*작성 댓글 크기*/

  font-family: "Noto Sans KR", sans-serif;
  border: 2px solid #ccc; /* 회색 테두리 */
  background-color: #f5f5f5; /* 회색 배경 */
  &::placeholder {
    /* placeholder 스타일링 */
    color: #aaa; /* 원하는 색상으로 설정 */
    font-size: 16px;
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
