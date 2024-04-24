import styled from "styled-components";

const InfoBox = () => {
  return (
    <InfoImgContainer>
      <InfoImgArea class="col-sm">
        <img
          src="https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>매칭을 위한 효율적인 알고리즘</p>
      </InfoImgArea>
      <InfoImgArea class="col-sm">
        <img
          src="https://plus.unsplash.com/premium_photo-1689247409618-aadab030a18d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>다양한 프로젝트</p>
      </InfoImgArea>
      <InfoImgArea class="col-sm">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>원활한 소통</p>
      </InfoImgArea>
    </InfoImgContainer>
  );
};

const InfoImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoImgArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 10px 16px 0 grey;
    margin-bottom: 15px;
    /* filter: grayscale(100%); */
  }
  p {
    font-weight: 700;
  }
`;

export default InfoBox;
