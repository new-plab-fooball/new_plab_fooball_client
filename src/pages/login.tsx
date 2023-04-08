import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_DEV_PATH } from "../data/pathList";
import { SubmitButtonStyle } from "../styles/common/button.style";
import { NormalInputStyle } from "../styles/common/input.style";
import { AccountsMove } from "../styles/page/accounts.style";
import { LoginForm } from "../styles/page/login.style";
import { IsLoginCkeck } from "../util/userFunc";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmitLogin = handleSubmit(async (input) => {
    try {
      const { data } = await axios.post(`${BASE_DEV_PATH}auth/login`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      alert(data.message);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    if (IsLoginCkeck()) {
      navigate(-1);
    }
  });
  return (
    <LoginForm onSubmit={onSubmitLogin}>
      <NormalInputStyle
        {...register("email")}
        type="email"
        placeholder="이메일을 입력해주세요."
      />
      <NormalInputStyle
        {...register("password")}
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <SubmitButtonStyle>로그인</SubmitButtonStyle>
      <AccountsMove>
        <span>계정이 없으신가요?</span>
        <button onClick={() => navigate("/accounts/signup")}>회원가입</button>
      </AccountsMove>
    </LoginForm>
  );
};

export default Login;
