import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginLogo, LoginBelowImg } from "../../components/ui/LoginLogo";
import Nav from "../../components/ui/Nav.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  //로그인 요청을 보내는 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "") setUsername(false);
    if (password === "") setPassword(false);

    if (username === "" || password === "") return;

    // 서버와 로그인 통신
    try {
      const response = await axios.post("/users/login", {
        username,
        password,
      });
      console.log("로그인 데이터: " + response.data);
      //로그인 성공시
      sessionStorage.setItem("username", response.data.username);
      navigator("/");
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("인증 실패! 아이디와 비밀번호를 다시 확인해주세요.");
      } else if (e.response && e.response.status === 500) {
        alert("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <Nav />
      <LoginContentsCotainer>
        <LoginForm>
          <LoginLogo></LoginLogo>
          <LoginInput
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <LoginButtonContainer>
            <LoginButton onClick={(e) => handleLogin(e)}>로그인</LoginButton>
            <SignUpButton onClick={() => navigator("/users/join")}>
              회원가입
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
  font-family: "Noto Sans KR", sans-serif;
`;

const SignUpButton = styled(LoginButtonComp)`
  background-color: #14cc14;

  &:hover {
    background-color: #11ad11;
  }
  font-family: "Noto Sans KR", sans-serif;
`;

export default LoginPage;
