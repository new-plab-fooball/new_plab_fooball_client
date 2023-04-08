import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2a2a2a;
  color: #999;
  padding: 50px;
`;

export const FooterLogo = styled.div`
  & img {
    width: 70px;
  }
  margin-bottom: 20px;
`;

export const FooterCompanyInfo = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export const FooterContentList = styled.ul`
  display: flex;
  font-size: 14px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 30px 0;
  & > li {
    margin: 0 30px;
    line-height: 1.5;
    &:first-child {
      margin-left: 0;
    }
  }
  & > li > h4 {
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
