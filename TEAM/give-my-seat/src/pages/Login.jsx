import styled from "styled-components";
import logo from "../assets/logo_with_text.svg";
import googleLogo from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 280px;
  height: 52px;
  border-radius: 50px;
  background-color: #30a2ff29;
  border: 1px solid transparent;
  padding-left: 34px;
`;

const LoginBtn = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  width: 280px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 18px;
`;

const GoogleLoginBtn = styled(LoginBtn)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  position: relative;
  img {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 120px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    if (email !== "" && password !== "") {
      navigate("/main");
    } else {
      e.preventDefault();
      alert("이메일과 패스워드를 입력해주세요");
    }
  };
  return (
    <Body>
      <Logo></Logo>
      <Form action="" onSubmit={submit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <LoginBtn>Login</LoginBtn>
        <GoogleLoginBtn>
          <img src={googleLogo} alt="" />
          Login with Google
        </GoogleLoginBtn>
      </Form>
    </Body>
  );
};

export default Login;
