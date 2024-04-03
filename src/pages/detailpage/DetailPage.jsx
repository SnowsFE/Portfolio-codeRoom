import { useParams } from "react-router";
import styled from "styled-components";
import {
  DetailTitle,
  DetailSubContent,
} from "../../components/ui/DetailHeaderInfo";

const DetailPage = () => {
  let { id } = useParams(); //게시판 id 가져오기

  return (
    <div>
      <DetailTitle></DetailTitle>
    </div>
  );
};

export default DetailPage;
