import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginLogo, BelowImg } from "../../components/ui/LoginLogo";

const JoinPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 중복 여부 및 비밀번호 상태
  // 3가지 상태에 대해서 모두 true 이여야지만 서버에 post 요청
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  // 비밀번호 유효성 검사
  const passwordCheck = async (e) => {
    if (e.target.value.length < 8) {
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다");
      return;
    }
    setIsPasswordValid(true);
    setErrorMessage("");
  };

  // confirm 비밀번호 유효성 검사
  const confirmPasswordCheck = async (e) => {
    if (password.length < 8) {
      setErrorMessage("비밀번호는 8자리 이상이어야 합니다");
      return;
    } else if (e.target.value !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      return;
    }
    setIsConfirmPasswordValid(true);
    setErrorMessage("");
  };

  // 중복 확인 (서버와 통신)
  const validCheckHandler = async (e) => {
    const response = await axios.post("/join/isDuplicated", {
      username,
    });
    console.log(username);
  };

  // 회원 가입 (서버와 통신)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUsernameChecked) {
      setErrorMessage("아이디 중복 확인을 해주세요.");
      return;
    }

    if (username.length < 8) {
      setErrorMessage("아이디는 8자리 이상이어야 합니다.");
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

    const response = await axios.post("/join", {
      username: username,
      password: password,
    });
    navigate("/login");
    console.log("login");
  };

  return (
    <ContentsCotainer>
      <LoginForm>
        <LoginLogo></LoginLogo>
        <InputContainer>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <CheckButton onClick={() => validCheckHandler()}>
            중복확인
          </CheckButton>
        </InputContainer>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            passwordCheck(e);
          }}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            confirmPasswordCheck(e);
          }}
        />
        {errorMessage && <Message>{errorMessage}</Message>}
        <ButtonContainer>
          <SignUpButton type="submit" onClick={(e) => handleSubmit(e)}>
            회원 가입
          </SignUpButton>
          <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
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
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 800px;
  height: 400px;
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
  font-weight: 700;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #28a745;
  font-weight: 700;

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
  margin-bottom: 20px;
`;

export default JoinPage;
