import styled from "styled-components";
import axios from "axios";
import LoginNav from "../../components/ui/LoginNav.jsx";
import MyBoards from "../../components/ui/MyBoards.jsx";
import MyComments from "../../components/ui/MyComments.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyPage = () => {
  const [myBoards, setMyBoards] = useState([]);
  const sampleBoards = [
    { title: "제목1", writer: "작성자1", views: "12", boardId: "0" },
    { title: "제목2", writer: "작성자2", views: "13", boardId: "1" },
  ];
  const navigator = useNavigate();

  // 나의 게시판 가져오기 (서버와 통신)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/mypage");
      console.log("mypage: " + res.data);
      //   setMyBoards(res.data);
    };
    // fetchData();
  }, []);

  return (
    <>
      <LoginNav />
      {/* Todo props로 데이터 전달 */}
      <MyBoards></MyBoards>
      <MyComments></MyComments>
    </>
  );
};

export default MyPage;
