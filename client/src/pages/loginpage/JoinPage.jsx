import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/ui/Nav.jsx";
import { LoginLogo, LoginBelowImg } from "../../components/ui/LoginLogo";

const TestJoinPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameChecked(false);
    if (e.target.value.length < 6) {
      setErrorMessage("아이디는 6자리 이상이어야 합니다.");
    } else {
      setErrorMessage(null);
    }
  };
  const handleUsernameCheck = async () => {
    try {
      const response = await axios.post("/users/checkDuplicate", {
        username: username,
      });

      if (response.data) {
        setErrorMessage("사용 가능한 아이디입니다.");
        setIsUsernameChecked(true);
      }
    } catch (e) {
      if (e.response.status === 400) {
        setErrorMessage("이미 사용중인 아이디입니다.");
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
    } else if (confirmPassword !== "" && e.target.value !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage(null);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password.length < 8) {
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
    } else if (e.target.value !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUsernameChecked) {
      setErrorMessage("아이디 중복 확인을 해주세요.");
      return;
    }

    if (username.length < 6) {
      setErrorMessage("아이디는 6자리 이상이어야 합니다.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    const response = await axios.post("/users/join", {
      username: username,
      password: password,
    });
    alert("회원가입 성공 😎");
    navigate("/users/login");
  };

  return (
    <>
      <Nav />
      <ContentsCotainer>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLogo></LoginLogo>
          <InputContainer>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <CheckButton onClick={handleUsernameCheck}>중복확인</CheckButton>
          </InputContainer>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errorMessage && <Message>{errorMessage}</Message>}
          <ButtonContainer>
            <SignUpButton type="submit">회원 가입</SignUpButton>
            <LoginButton
              onClick={() => {
                navigate("/users/login");
              }}
            >
              로그인
            </LoginButton>
          </ButtonContainer>
        </LoginForm>
        <LoginBelowImg></LoginBelowImg>
      </ContentsCotainer>
    </>
  );
};

const ContentsCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 40px auto;
  padding: 40px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 350px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 28px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  width: 45%;
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

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckButton = styled(Button)`
  width: 30%;
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

const Message = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export default TestJoinPage;
