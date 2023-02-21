
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Img } from '../elements/Img'
import ImgsLogo from "../../assets/logo-drogaria-sp.png";

export const Nav = styled.nav`
  background: #487a8f;
  height: 55px;
  display: flex;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
 
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  justify-content: flex-end;  
  padding: 0 1rem;
  height: 100%;
  border-bottom: 2px solid #f0f0f0;
  :active {
    border-bottom: 2px solid #f0f0f0;
  }
  :hover {
    border-bottom: none;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
 
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #7996e6;
  padding: 10px 22px;
  color: #000000;
  font-size: 14px;
  height:20px;
  width:30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
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
const NavBar = () => {
  return (
    <Nav>
      <Img src={ImgsLogo} />
      <Bars />
      <NavBtn>
        <NavLink to='/home' >
          Medicamentos
        </NavLink>
        <NavBtnLink to='/login'>Sair</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default NavBar