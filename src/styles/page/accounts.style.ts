import styled from "styled-components";

export const AccountsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);
  position: relative;
  background: url("../images/login_background.jpg") no-repeat center/cover;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
export const AccountsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
`;
export const AccountsIntro = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const AccountsMove = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  & > span {
    font-size: 12px;
  }
  & > button {
    color: #1570ff;
  }
`;
export const AccountsGuide = styled.div`
  margin: 10px 0;
  font-size: 15px;
`;
export const AccountsTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(40, 43, 51);
  border-top: 1px solid rgb(40, 43, 51);
  padding: 10px 0;
`;
