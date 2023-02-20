import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  html body {
  width: 100%;
  height: 100%;
  font-family: 'Poppins', Sans-Serif;
  margin: 0;
  background-color: #f2f2f2;
  padding: 0;
  &::-webkit-scrollbar {
        width: 8px;
        color: #f2f2f2;
        background-color: #2570a184;
        border-radius: 10px;
    }
   
  }
  

`;



export default Global;
