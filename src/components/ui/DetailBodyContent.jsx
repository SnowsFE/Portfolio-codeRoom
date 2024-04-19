import { useState } from "react";
import styled from "styled-components";

const DetailContentBody = ({ content }) => {
  return (
    <DetailBodyContainer>
      <h1>프로젝트 소개</h1>
      <hr />
      <div className="body-area">{content}</div>
      <hr />
    </DetailBodyContainer>
  );
};

const DetailBodyContainer = styled.section`
  margin: 0 auto;
  width: 65%;

  h1 {
    text-align: left;
    font-size: 26px;
    margin-bottom: 35px;
  }

  hr {
    height: 2px;
    background-color: rgb(113, 113, 113);
    border: none;
  }

  .body-area {
    text-align: left;
    font-size: 18px;
    margin: 40px 0 40px 0;
  }
`;

export default DetailContentBody;
