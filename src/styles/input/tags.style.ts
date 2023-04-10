import styled from "styled-components";

type TagType = {
  isSelect:boolean
  color:string;
  fontSize:string
  tagWidth?:string
}

export const TagContainer = styled.button`
  width:${(props) =>props.tagWidth};
  padding: ${(props) =>props.tagWidth ? '10px 0' : '10px 20px'} ;
  transition: .4s;
  background-color: ${(props:TagType) => props.isSelect ? props.color : "#F2F5F7"};
  border:${(props:TagType) => props.isSelect ? props.color : "1px solid #D9E0E6"};
  color:${(props:TagType) =>  props.isSelect ? "white" : "#222"};
  font-size: ${(props:TagType) => props.fontSize};
  border-radius: 10px;
  margin:0 10px 10px 0;

`;

export const TagBoxContainer = styled.div`
  transition: .4s;
  display: flex;
  flex-wrap: wrap;
`;
