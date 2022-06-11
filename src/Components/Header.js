import React,{useState} from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carslice';
import { useSelector } from 'react-redux';

const Header = () => {

    const [burger, setBurger] = useState(false);
    // const cars = useSelector(selectCars)
  return (
    <Container>
      <a href="">
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>  
        {/* {cars && cars.map(((car, index) => 
      <a key={index} href="">{car}</a>
          
        ))} */}
      <a href="">Model S</a>
      <a href="">Model 3</a>
      <a href="">Model X</a>
      <a href="">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="">SHOP</a>
        <a href="">TELSA ACCOUNT</a>
        <a href="#" onClick={()=> setBurger(true)}>Menu</a>
      </RightMenu>
      <BurgerNav show={burger}>
        <CloseWrapper onClick={()=> setBurger(false)}>
            X
        </CloseWrapper>
          {/* {cars && cars.map(((car, index) => 
      <li key={index}><a href="">{car}</a></li>
          
        ))} */}
            
            <li><a href="">Used Invertory</a></li>
            <li><a href="">Trade In</a></li>
            <li><a href="">Cybertruck</a></li>
            <li><a href="">Roadaster  </a></li>
            <li><a href="">Existing Invertory</a></li>
            <li><a href="">Existing Invertory</a></li>

        </BurgerNav>
      </Container>
  )
}

export default Header


const Container = styled.div`
z-index: 10;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
 right: 0;
 width: 100%;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  flex-wrap: nowrap;

  }
  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
    a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 5px;
    // margin-right: 10px;
    }
`

const BurgerNav = styled.div`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      background: white;
      width: 300px; 
      z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s ease-in;
    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      a{
        font-weight:  600;
        diplay:none;
      }
    }
 `

const CloseWrapper = styled.div`
    text-align: end;
    cursor: pointer; 
 `