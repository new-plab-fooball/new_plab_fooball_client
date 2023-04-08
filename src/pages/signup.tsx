import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NormalInput } from "../components/input/input";
import { BASE_DEV_PATH } from "../data/pathList";
import {
  NormalButtonStyle,
  SubmitButtonStyle,
} from "../styles/common/button.style";
import { AuthNumInputFlexBox } from "../styles/common/input.style";
import { AccountsMove, AccountsTitle } from "../styles/page/accounts.style";
import { SignUpContainer, SignUpForm } from "../styles/page/signup.style";

const SignUp = () => {
  const navigate = useNavigate();
  const [is_auth_request, setIsAuthRequest] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmitSignUp = handleSubmit(async (input) => {
    try {
      delete input.auth_num;
      const { data } = await axios.post(`${BASE_DEV_PATH}user/`, input, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      alert(data.message);
      navigate("/accounts/login");
    } catch (error) {
      console.log(error);
    }
  });

  const onClickRequestAuth = handleSubmit(async (input) => {
    try {
      const { data } = await axios.post(`${BASE_DEV_PATH}auth/signup_email/`, {
        email: input.email,
      });
      setIsAuthRequest(true);
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  });

  const onClickAuthDone = handleSubmit(async (input) => {
    try {
      const { data } = await axios.post(`${BASE_DEV_PATH}auth/done/`, {
        auth_num: input.auth_num,
        email: input.email,
      });
      setIsAuthRequest(true);
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <SignUpContainer>
      <AccountsTitle>이메일 회원가입</AccountsTitle>
      <SignUpForm onSubmit={onSubmitSignUp}>
        <AuthNumInputFlexBox>
          <NormalInput
            label="이메일"
            type="email"
            placeholder="인증 번호를 받을 이메일을 입력해주세요."
            resister={register}
            params="email"
          />
          <NormalButtonStyle onClick={onClickRequestAuth} type="button">
            {is_auth_request ? "재요청" : "인증요청"}
          </NormalButtonStyle>
        </AuthNumInputFlexBox>
        {is_auth_request && (
          <AuthNumInputFlexBox>
            <NormalInput
              label="인증번호"
              placeholder="확인된 인증번호를 입력해주세요."
              resister={register}
              params="auth_num"
            />
            <NormalButtonStyle onClick={onClickAuthDone} type="button">
              인증완료
            </NormalButtonStyle>
          </AuthNumInputFlexBox>
        )}
        <NormalInput
          label="비밀번호"
          type="password"
          placeholder="사용할 비밀번호를 입력해주세요."
          resister={register}
          params="password"
        />
        <NormalInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 확인해주세요."
          resister={register}
          params="password_check"
        />
        <NormalInput
          label="이름"
          placeholder="사용할 이름을 입력해주세요."
          resister={register}
          params="name"
        />
        <SubmitButtonStyle>회원 가입</SubmitButtonStyle>
        <AccountsMove>
          <span>이미 계정이 있으신가요?</span>
          <button onClick={() => navigate("/accounts/login")}>로그인</button>
        </AccountsMove>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
