import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/ui/Nav.jsx";
import { LoginLogo, LoginBelowImg } from "../../components/ui/LoginLogo";

const TestJoinPage = () => {
  const [password, setPassword] = useState("");
  const [modifiyPassword, setModifiyPassword] = useState("");
  const [confirmModifiyPassword, setConfirmModifiyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setModifiyPassword(e.target.value);
    if (e.target.value.length < 8) {
      setErrorMessage("수정할 비밀번호는 8자리 이상이어야 합니다.");
    } else {
      setErrorMessage(null);
    }
  };

  const handleConfirmPasswordChange2 = (e) => {
    setConfirmModifiyPassword(e.target.value);
    if (e.target.value !== modifiyPassword) {
      setErrorMessage("수정할 비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modifiyPassword.length < 8) {
      setErrorMessage("수정할 비밀번호는 8자리 이상이어야 합니다.");
      return;
    }

    if (modifiyPassword !== confirmModifiyPassword) {
      setErrorMessage("수정할 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await axios.put("/users/update", {
        currentPassword: password,
        newPassword: modifiyPassword,
        confirmPassword: confirmModifiyPassword,
      });
      alert("비밀번호가 수정되었습니다 😙");
      navigate("/users/login");
    } catch (e) {}
  };

  return (
    <>
      <Nav />
      <ContentsCotainer>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLogo></LoginLogo>
          <InputContainer></InputContainer>
          <Input
            type="password"
            placeholder="현재 비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            type="password"
            placeholder="수정 비밀번호"
            value={modifiyPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Input
            type="password"
            placeholder="수정 비밀번호 확인"
            value={confirmModifiyPassword}
            onChange={handleConfirmPasswordChange2}
          />
          {errorMessage && <Message>{errorMessage}</Message>}
          <ButtonContainer>
            <SignUpButton type="submit">비밀번호 수정</SignUpButton>
            <LoginButton
              onClick={() => {
                navigate(-1);
              }}
            >
              돌아가기
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
