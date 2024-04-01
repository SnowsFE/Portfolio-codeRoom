import styled from "styled-components";

const InfoBox = () => {
  return (
    <div class="container">
      <div class="row">
        <ImgArea class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>매칭을 위한 효율적인 알고리즘</p>
        </ImgArea>
        <ImgArea class="col-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1689247409618-aadab030a18d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>다양한 프로젝트</p>
        </ImgArea>
        <ImgArea class="col-sm">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>원활한 소통</p>
        </ImgArea>
      </div>
    </div>
  );
};

/**
프로젝트 팀원 모집: 프로젝트 모집 사이트는 프로젝트를 진행할 팀원들을 모집하는 플랫폼으로, 프로젝트에 필요한 역량과 관심 분야에 맞는 팀원을 찾을 수 있습니다.
포트폴리오 및 이력서 공유: 사용자들은 자신의 포트폴리오와 이력서를 업로드하여 다른 사용자들에게 자신을 소개하고 프로젝트 참여를 독려할 수 있습니다.
프로젝트 정보 공유: 프로젝트의 목표, 내용, 기간, 보상 등을 공유하여 프로젝트에 참여하고자 하는 사용자들에게 정보를 전달할 수 있습니다.
실적과 평가: 프로젝트에 참여한 사용자들의 실적과 평가를 통해 신뢰도를 높일 수 있습니다. 이를 통해 프로젝트에 참여하는 사용자들 간의 신뢰를 증진시킬 수 있습니다.

더 고민해볼만한 내용:

보안과 신뢰성: 사용자들의 개인정보 보호와 거래의 안전성을 확보하기 위한 보안 시스템의 강화가 필요합니다.
매칭 알고리즘: 프로젝트 참여자와 프로젝트를 진행하는 팀 간의 매칭을 위한 효율적인 알고리즘의 도입이 필요합니다.
다양한 프로젝트 유형: 다양한 분야와 유형의 프로젝트를 지원하기 위해 플랫폼의 다양성과 유연성을 고민해야 합니다.
커뮤니케이션 도구: 프로젝트 참여자들 간의 소통을 원활하게 할 수 있는 채팅이나 회의 도구의 도입을 고려해볼 수 있습니다.
 */

const ImgArea = styled.div`
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
    filter: grayscale(100%);
  }
  p {
    font-weight: 700;
  }
`;

export default InfoBox;
