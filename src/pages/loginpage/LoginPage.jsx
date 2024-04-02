import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginLogo, BelowImg } from "../../components/ui/LoginLogo";
import CodeRoomBanner from "../../img/CodeRoomBanner.png";

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
      const response = await axios.post("/login", {
        username,
        password,
      });
      console.log(response.data);
      //로그인 성공시
      navigator("/");
      //로그인 실패시
      alert("아이디 또는 비밀번호를 확인해주세요");
    } catch (e) {}
  };

  return (
    <ContentsCotainer>
      <LoginForm>
        <LoginLogo></LoginLogo>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <ButtonContainer>
          <LoginButton onClick={(e) => handleLogin(e)}>로그인</LoginButton>
          <SignUpButton onClick={() => navigator("/join")}>
            회원가입
          </SignUpButton>
        </ButtonContainer>
      </LoginForm>
      <BelowImg></BelowImg>
    </ContentsCotainer>
  );
};

const ContentsCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
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
  /* align-items: center; */
  justify-content: center;
  width: 800px; // 폼의 너비를 300px에서 500px로 증가s
  height: 400px;
  padding: 30px; // 폼 안의 패딩을 20px에서 50px로 증가
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  width: 45%;
  font-weight: 700;
`;

const LoginButton = styled(Button)`
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export default LoginPage;