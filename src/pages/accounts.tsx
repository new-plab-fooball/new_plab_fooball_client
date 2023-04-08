import { Route, Routes } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import {
  AccountsContainer,
  AccountsIntro,
  AccountsWrapper,
} from "../styles/page/accounts.style";
import { PointColorText } from "../styles/common/text.style";

const Accounts = () => {
  return (
    <>
      <AccountsContainer>
        <AccountsWrapper>
          <AccountsIntro>
            <div>풋살하고 싶을 땐</div>
            <PointColorText>플랩풋볼</PointColorText>
          </AccountsIntro>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AccountsWrapper>
      </AccountsContainer>
    </>
  );
};

export default Accounts;
