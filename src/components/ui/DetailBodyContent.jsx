import { useState } from "react";
import styled from "styled-components";
//
const DetailContentBody = () => {
  const [body, setBody] = useState(
    "본문 내용 임돠 조금만 더 길게 작성해보고 더 길게 작성해보겠습니다. 옆으로 짤리면 대참사이므로 제발 안 짤렸으면 좋겠다 ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ"
  );

  return (
    <DetailBodyContainer>
      <h1>프로젝트 소개</h1>
      <hr />
      <div className="body-area">{body}</div>
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
