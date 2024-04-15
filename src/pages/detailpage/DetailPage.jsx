import { useParams } from "react-router";
import { DetailTitle } from "../../components/ui/DetailHeaderContent";
import DetailContentBody from "../../components/ui/DetailBodyContent";
import DetailComment from "../../components/ui/DetailComment";
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
  const [plan, setPlan] = useState(""); //시작예정
  const [contact, setContact] = useState(""); //연락방법
  const [duration, setDuration] = useState(""); //예상 기간
  const [recruitField, setRecruitField] = useState([]); //모집 분야
  const [language, setLanguage] = useState([]); //사용 언어 ex) spring

  // todo 서버에서 detail 데이터를 받아오기
  useEffect(() => {
    const getBoardData = async () => {
      try {
        const res = await axios.get(`/boards/${id}`);
        console.log("detail board 데이터: " + res.data); //detail page data 확인용
        setTitle(res.data.title);
        setWriter(res.data.writer);
        setWriteDt(res.data.writeDt);
        setView(res.data.view);
        setRecruitType(res.data.recruitType);
        setProgressMethod(res.data.progressMethod);
        setRecruitMember(res.data.recruitMember);
        setPlan(res.data.plan);
        setContact(res.data);
        setDuration(res.data);
        setRecruitField(res.data);
        setLanguage(res.data);
      } catch (error) {}
    };
  }, []);

  return (
    <div>
      <DetailTitle></DetailTitle>
      <DetailContentBody></DetailContentBody>
      <DetailComment></DetailComment>
    </div>
  );
};

export default DetailPage;
