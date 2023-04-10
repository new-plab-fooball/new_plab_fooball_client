import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
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
  .font_color_main{
    color: rgb(21, 112, 255);
  }
`;
