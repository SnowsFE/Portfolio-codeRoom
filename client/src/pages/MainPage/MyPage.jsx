import React from "react";
import styled from "styled-components";
import Nav from "../../components/ui/Nav";

// Nav 컴포넌트를 Nav라는 이름으로 import합니다.

function MyPage() {
  return (
    <>
      <Nav />
      <MyPageContainer>
        <h2>마이페이지</h2>
        <ProfileUpdateSection>
          <h3>개인정보 변경</h3>
          {/* 폼 구현 */}
        </ProfileUpdateSection>
        <PostsListSection>
          <h3>내 게시글</h3>
          {/* 게시글 목록 구현 */}
        </PostsListSection>
      </MyPageContainer>
    </>
  );
}

// 마이페이지 컨테이너 스타일드 컴포넌트 정의
const MyPageContainer = styled.div`
  padding: 20px;
  background-color: #d5ffd5;
`;

// 프로필 업데이트 섹션 스타일드 컴포넌트 정의
const ProfileUpdateSection = styled.div`
  margin-top: 20px;
`;

// 게시글 목록 섹션 스타일드 컴포넌트 정의
const PostsListSection = styled.div`
  margin-top: 20px;
`;

export default MyPage;
