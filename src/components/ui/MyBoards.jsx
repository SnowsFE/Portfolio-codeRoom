import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyBoards = () => {
  const [myBoards, setMyBoards] = useState([]);
  const sampleBoards = [
    {
      title: "제목 111111111111111111111111111111111111111",
      writerDt: "2024.01.01",
      views: "12",
      boardId: "0",
    },
    {
      title: "제목 2",
      writerDt: "2024.01.01",
      views: "13",
      boardId: "1",
    },
  ];
  const navigator = useNavigate();

  //제목 길이를 조정하는 함수
  const titleCheck = (boards) => {
    boards.forEach((board) => {
      let sliceTitle = truncateString(board.title, 20);
      console.log("길이 조정" + sliceTitle);
      board.title = sliceTitle;
    });
  };
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num - 3) + "...";
    } else {
      return str;
    }
  }
  titleCheck(sampleBoards);

  // 수정 클릭시 해당 게시판으로 이동
  const inquery = (boardId) => {
    navigator(`/boards/${boardId}/update`);
  };

  // 삭제 클릭시 해당 게시판 삭제 (서버 통신)
  const deleteBoard = async (boardId) => {
    const res = await axios.delete(`/boards/${boardId}`);
    console.log("데이터 삭제: " + res.data);
    navigator("/MyPage");
  };

  return (
    <MyBoardsContainer>
      <table>
        <caption>내가 작성한 게시판</caption>
        <thead>
          <tr>
            <th>제목</th>
            <th>조회수</th>
            <th>작성일자</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {sampleBoards.map((board, index) => {
            return (
              <tr>
                <td>
                  <a href={`/boards/${board.boardId}`}>{board.title}</a>
                </td>
                <td>{board.views}</td>
                <td>{board.writerDt}</td>
                <td>
                  <button class="view" onClick={() => inquery(board.boardId)}>
                    수정
                  </button>
                  <button
                    class="delete"
                    onClick={() => deleteBoard(board.boardId)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <td colspan="5" class="tablefoot"></td>
        </tfoot>
      </table>
    </MyBoardsContainer>
  );
};

const MyBoardsContainer = styled.div`
  margin-bottom: 60px;

  a {
    text-decoration: none; /* 기본 텍스트 밑줄 제거 */
    color: inherit; /* 기본 링크 색상 상속 */
  }

  table {
    width: 700px;
    text-align: center;
    border: 1px solid #fff;
    border-spacing: 1px;
    font-family: "Cairo", sans-serif;
    margin: auto;
  }

  caption {
    font-weight: bold;
    text-align: left;
    margin-bottom: 18px;
  }

  table td {
    padding: 10px;
    background-color: #fff;
  }

  table th {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  img {
    width: 90px;
    height: 90px;
  }

  .view,
  .delete {
    border: none;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .view:hover,
  .delete:hover {
    background-color: #333; /* hover 시 배경색 변경 */
  }

  .view {
    background-color: #03a9f4;
  }

  .delete {
    background-color: #e91e63;
  }

  .tablefoot {
    padding: 0;
    border-bottom: 3px solid #333;
  }
`;

export default MyBoards;
