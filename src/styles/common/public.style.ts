import styled from "styled-components";

type CommonWrapper = {
  flexBox?: boolean;
  alignItem?:"center" | string
};

export const CommonWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
  display: ${(props: CommonWrapper) => (props.flexBox ? "flex" : "block")};
  align-items:${(props: CommonWrapper) => (props.alignItem)};
  justify-content: space-between;
  
`;

export const UserIconStyle = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid rgb(40, 43, 51);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  transition: .4s;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`