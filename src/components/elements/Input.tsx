import styled from "styled-components";



export const Input = styled.input`
    max-width:300px;
    width:250px;
    height:20px;
    max-height:30px;
    margin-left:20px;
    background-color:#e1e9f3; 
    border:0px solid  #65696d;
    padding: 10px;
    font-size: 14px;
    border-left: 6px solid  #437d94;
    border-radius: 3px; 
    :focus {
      outline: none;
      border:0px solid  #65696d;
      border-left: 6px solid  #437d94;
   
    }
    :active{
      border:0px solid  #cacaca;
      outline: none;    
      border-left: 6px solid  #437d94;
      
    }
    :hover{
      box-shadow: 0px 0px 5px #437d94;
      transition: box-shadow 0.3s ease-in-out;
    }
    `

