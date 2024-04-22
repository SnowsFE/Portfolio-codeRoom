import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CodeRoomBanner from "../../img/Banner/CodeRoomBanner.png";
import Ad1 from "../../img/Banner/Ad1.png";
import Ad2 from "../../img/Banner/Ad2.png";
import LeftArrow from "../../img/Banner/LeftArrow.png";
import RightArrow from "../../img/Banner/RightArrow.png";

const images = [CodeRoomBanner, Ad1, Ad2];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // useEffect를 사용해 컴포넌트가 마운트됐을 때 타이머 설정
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(); // 5초마다 nextSlide 함수를 실행
    }, 5000);

    // 컴포넌트가 언마운트 되거나 업데이트될 때 이전 타이머를 정리
    return () => clearInterval(timer);
  }, []); // 빈 배열을 전달해 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  return (
    <BannerSliderContainer>
      <BannerStyle>
        <img src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
      </BannerStyle>
      <BannerPageNumber>
        <BannerButtons>
          <PrevButton onClick={prevSlide}>
            <img src={LeftArrow} alt="Previous" /> {/* LeftArrow 이미지 사용 */}
          </PrevButton>
          <NextButton onClick={nextSlide}>
            <img src={RightArrow} alt="Next" /> {/* RightArrow 이미지 사용 */}
          </NextButton>
        </BannerButtons>
        {currentIndex + 1} / {images.length}
      </BannerPageNumber>
    </BannerSliderContainer>
  );
};

const BannerSliderContainer = styled.div`
  position: relative;
  width: 1300px;
  height: 336px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
`;

const BannerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1300px;
    height: 336px;
    object-fit: cover;
  }
`;

const BannerButtons = styled.div`
  position: absolute;
  top: 52%;
  margin-left: -31%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  cursor: pointer;

  img {
    width: 15px;
  }
`;

const PrevButton = styled.div``;

const NextButton = styled.div``;

const BannerPageNumber = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ffffff;
  padding: 5px 40px;
  border-radius: 20px;
  color: #14cc14;
`;
export default Banner;
