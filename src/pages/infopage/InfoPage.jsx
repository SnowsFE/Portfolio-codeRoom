import styled from "styled-components";

const InfoPage = () => {
  return (
    <div>
      <HeaderInfo>
        <h4>Coding-room Project</h4>
        <h1>
          프로젝트 & 스터디 모집과 <br /> 트랜드 파악을 한번에
        </h1>
      </HeaderInfo>
      <BackgroundImg></BackgroundImg>
      <BodyInfo>
        <h4>Beyond Diagnostics</h4>
        <h1>코딩룸은 모집 그 이상을 고민합니다.</h1>
        <p>
          코딩룸은 프로젝트를 진행할 팀원들을 모집하는 플랫폼으로, <br />
          프로젝트에 필요한 역량과 관심 분야에 맞는 팀원을 찾을 수 있습니다.
        </p>
      </BodyInfo>
    </div>
  );
};

export default InfoPage;

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

// 첫 번째 배경 이미지
const BackgroundImg = styled.section`
  height: 680px;
  background-image: url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
`;

// 첫 번째 글
const HeaderInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 380px;
  text-align: left;
  padding-left: 30px;

  h4 {
    color: rgb(244, 81, 30);
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 24px;
  }
  h1 {
    font-weight: 700;
    font-size: 48px;
  }
`;

// 두 번째 글
const BodyInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 380px;
  text-align: center;
  padding-left: 30px;

  h4 {
    color: rgb(244, 81, 30);
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 24px;
  }
  h1 {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 25px;
  }
`;
