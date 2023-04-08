import styled from "styled-components";


export const SelectContainer = styled.div`
  width: 100%;
`;

export const SelectOnButton = styled.button`
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 13px 0;
  font-size: 17px;
  width: 100%;
  border: 1px solid #ccc;
  border-color: ${(props) => props.color && props.color};
  color:${(props) => props.color && props.color};
`;

export const OptionsWrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(21, 112, 255);
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  width: 300px;
  transition:.4s;
  padding: 0 20px 20px 20px;
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 13px 0;
  width: 100%;
  border-radius: 5px;
  border:1px solid rgb(21, 112, 255);
  color: rgb(21, 112, 255);
  text-align: center;
  margin-bottom: 10px;
  transition: .4s;
  &:hover {
    background-color: "";
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionsTitle = styled.div`
    text-align: center;
    padding:20px 0;
    font-size: 17px;
`