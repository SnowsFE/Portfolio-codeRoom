import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginLogo, LoginBelowImg } from "../../components/ui/LoginLogo.jsx";
import LoginNav from "../../components/ui/LoginNav.jsx";

const UpdatePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [configPassword, setConfigPassword] = useState("");

  const navigator = useNavigate();

  //비밀번호 수정 요청을 보내는 함수(서버 통신)
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    // 서버와 로그인 통신
    try {
      const response = await axios.put("/users", {
        currentPassword,
        configPassword,
      });
      console.log("비밀번호 수정 데이터: " + response.data);
      navigator("/");
    } catch (e) {
      if (e.response && e.response.status === 404) {
        alert("인증 실패! 현재 비밀번호와 수정된 비밀번호를 다시 입력해주세요");
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
            type="text"
            placeholder="현재 비밀번호"
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />
          <LoginInput
            type="text"
            placeholder="수정할 비밀번호"
            onChange={(e) => {
              setConfigPassword(e.target.value);
            }}
          />
          <LoginButtonContainer>
            <LoginButton onClick={(e) => handlePasswordChange(e)}>
              비밀번호 변경
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

export default UpdatePasswordPage;
