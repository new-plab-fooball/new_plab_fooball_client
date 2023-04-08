import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 999999;
  padding: 15px 0;
`;

export const HeaderLogo = styled.div`
  & img {
    width: 50px;
  }
`;

export const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMargin = styled.div`
  width: 100%;
  height: 65px;
`;

export const HeaderMenu = styled.button`
  width: 30px;
  height: 20px;
  position: relative;
  margin-left: 20px;
  & > span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(40, 43, 51);
    position: absolute;
    left: 0;
    border-radius: 1px;
    transition: 0.4s;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
    }
    &:last-child {
      top: 100%;
    }
  }
  &.active {
    & > span {
      top: 50%;
    }
    & > span:first-child {
      transform: rotate(45deg);
    }
    & > span:nth-child(2) {
      opacity: 0;
      left: 100%;
    }
    & > span:last-child {
      transform: rotate(-45deg);
    }
  }
`;
