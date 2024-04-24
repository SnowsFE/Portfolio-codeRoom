import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginLogo, LoginBelowImg } from "../../components/ui/LoginLogo.jsx";
import LoginNav from "../../components/ui/LoginNav.jsx";

const UserDeletePage = () => {
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  //회원 탈퇴 함수(서버 통신)
  const handleUserDelete = async (e) => {
    e.preventDefault();

    // 서버와 로그인 통신
    try {
      // alert("보낼 데이터: " + password);
      const response = await axios.delete("/users/delete", {
        data: {
          password,
        },
      });
      console.log("회원 삭제 데이터: " + response.data);
      // 세션 스토리지 데이터 삭제
      sessionStorage.clear();
      alert("회원이 탈퇴되었습니다 😢");
      navigator("/");
    } catch (e) {
      if (
        e.response &&
        e.response.status === 404 &&
        e.response.status === 401 &&
        e.response.status === 400
      ) {
        alert("인증 실패! 비밀번호를 확인해주세요");
      } else if (e.response && e.response.status === 500) {
        alert("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <LoginNav />
      <LoginContentsCotainer>
        <LoginForm>
          <LoginLogo></LoginLogo>
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <LoginButtonContainer>
            <LoginButton onClick={(e) => handleUserDelete(e)}>
              삭제하기
            </LoginButton>
            <SignUpButton onClick={() => navigator("/MyPage")}>
              뒤로 가기
            </SignUpButton>
          </LoginButtonContainer>
        </LoginForm>
        <LoginBelowImg></LoginBelowImg>
      </LoginContentsCotainer>
    </>
  );
};

const LoginContentsCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 40px auto;
  padding: 40px;

  .footerImg {
    margin-top: 40px;
    width: 800px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 350px;
  padding: 30px; // 폼 안의 패딩을 20px에서 50px로 증가
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const LoginInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LoginButtonComp = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  width: 45%;
  font-weight: 700;
`;

const LoginButton = styled(LoginButtonComp)`
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton = styled(LoginButtonComp)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export default UserDeletePage;
