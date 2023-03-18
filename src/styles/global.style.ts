import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    color: #0b2239;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  label {
    display: block;
  }
  button,
  input,
  select {
    background: none;
    border: none;
    outline: none;
    display: block;
  }
  .common_wrapper{
    width: 1110px;
    margin: 0 auto;
  }
`;
