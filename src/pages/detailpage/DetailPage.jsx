import { useParams } from "react-router";
import styled from "styled-components";
import { DetailTitle } from "../../components/ui/DetailHeaderContent";
import DetailContentBody from "../../components/ui/DetailBodyContent";
import DetailComment from "../../components/ui/DetailComment";

const DetailPage = () => {
  let { id } = useParams(); //게시판 id 가져오기

  return (
    <div>
      <DetailTitle></DetailTitle>
      <DetailContentBody></DetailContentBody>
      <DetailComment></DetailComment>
    </div>
  );
};

export default DetailPage;
