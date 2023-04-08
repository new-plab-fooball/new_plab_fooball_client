import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CommonWrapper, UserIconStyle } from "../../styles/common/public.style";
import {
  HeaderContainer,
  HeaderRightContent,
  HeaderLogo,
  HeaderMargin,
  HeaderMenu,
} from "../../styles/layout/header.style";
import { IsLoginCkeck } from "../../util/userFunc";

const Header = () => {
  const navigate = useNavigate();
  const onClickUserIcon = () => {
    if (IsLoginCkeck()) {
      navigate("/mypage");
    } else {
      navigate("/accounts/login");
    }
  };
  return (
    <>
      <HeaderMargin></HeaderMargin>
      <HeaderContainer>
        <CommonWrapper alignItem="center" flexBox={true}>
          <HeaderLogo>
            <img src="https://new-plab-fooball-bucket.s3.ap-northeast-2.amazonaws.com/public/logo.svg" />
          </HeaderLogo>
          <HeaderRightContent>
            <UserIconStyle onClick={onClickUserIcon}>
              <img src="../images/icons/user_icon.svg" alt="user icon" />
            </UserIconStyle>
            <HeaderMenu
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.classList.toggle("active");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </HeaderMenu>
          </HeaderRightContent>
        </CommonWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
