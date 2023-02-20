import styled from "styled-components";


export const Button = styled.button`
  background: #61a2f7;
  color: black;
  border: 0px solid #f3efef;
  border-radius: 3px;
  width: 120px;
  margin: 5px;
  height: 35px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0 0 5px #808080;
    color: #ffffff;
  }
  :disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
  }
`

