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

// section -> pre 로 수정
const DetailBodyContainer = styled.pre`
  font: 1.2rem "Fira Sans", sans-serif;
  margin: 0 auto;
  width: 50%;
  font-size: 35px;
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
    font-size: 23px;
    margin: 40px 0 40px 0;
    font-family: inherit;
    white-space: pre-wrap;
  }
`;

export default DetailContentBody;
