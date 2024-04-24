import { useParams } from "react-router";
import {
  DetailTitle,
  DetailSubContent,
} from "../../components/ui/DetailHeaderContent";
import DetailContentBody from "../../components/ui/DetailBodyContent";
import DetailComment from "../../components/ui/DetailComment";
import { svgFiles, fileNames } from "../../constants/fileNames";
import { isLogin } from "../../common/IsLogin";
import Nav from "../../components/ui/Nav";
import LoginNav from "../../components/ui/LoginNav";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DetailPage = () => {
  let { id } = useParams(); //게시판 id 가져오기

  const [title, setTitle] = useState(""); //제목
  const [writer, setWriter] = useState(""); //작성자
  const [writeDt, setWriteDt] = useState(""); //작성 일자
  const [view, setView] = useState(); //조회수

  const [recruitType, setRecruitType] = useState([]); //모집구분
  const [progressMethod, setProgressMethod] = useState(""); //진행방식
  const [recruitMember, setRecruitMember] = useState(""); //모집인원
  // const [plan, setPlan] = useState(""); //시작예정
  const [endDate, setEndDate] = useState(""); //모집 마감일
  const [contact, setContact] = useState(""); //연락방법
  const [duration, setDuration] = useState(""); //예상 기간
  const [recruitField, setRecruitField] = useState([]); //모집 분야
  const [language, setLanguage] = useState([]); //사용 언어 ex) spring
  const [comments, setComments] = useState([]); //댓글

  const [content, setContent] = useState("");

  // todo 서버에서 detail 데이터를 받아오기
  useEffect(() => {
    const getBoardData = async () => {
      try {
        const res = await axios.get(`/boards/${id}`);
        // console.log("detail board 데이터: " + res.data.postresult[0].title); //detail page data 확인용
        setTitle(res.data.postresult[0].title);
        setWriter(res.data.postresult[0].username);
        setWriteDt(res.data.postresult[0].createdate);
        setView(res.data.postresult[0].views);
        setRecruitType(res.data.postresult[0].recruittype);
        setProgressMethod(res.data.postresult[0].progress);
        setRecruitMember(res.data.postresult[0].recruitmember);
        setContact(res.data.postresult[0].contact);
        setDuration(res.data.postresult[0].duration);
        setRecruitField(res.data.postresult[0].recruitFields);
        setLanguage(res.data.postresult[0].languages);
        setEndDate(res.data.postresult[0].enddate); //Todo
        setContent(res.data.postresult[0].content);
        setComments(res.data.cmtresult);
      } catch (error) {}
    };
    getBoardData();
  }, []);

  return (
    <div>
      {isLogin() === true ? <LoginNav /> : <Nav />}
      <DetailTitle
        title={title}
        writer={writer}
        writeDt={writeDt}
        view={view}
        language={language}
        recruitType={recruitType}
        progressMethod={progressMethod}
        recruitMember={recruitMember}
        contact={contact}
        duration={duration}
        recruitField={recruitField}
        endDate={endDate}
      ></DetailTitle>
      <DetailContentBody content={content}></DetailContentBody>
      <DetailComment
        comments={comments}
        setComments={setComments}
      ></DetailComment>
    </div>
  );
};

export default DetailPage;
