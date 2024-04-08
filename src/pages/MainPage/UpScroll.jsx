import React from "react";
import styled from "styled-components";
import UpIcon from "../../img/UpScroll.png";

const UpScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 적용
    });
  };

  return (
    <IconContainer onClick={scrollToTop}>
      <IconImage src={UpIcon} alt="UpScroll" />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconImage = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default UpScroll;
