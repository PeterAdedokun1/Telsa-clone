import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const Section = ({title,  desc,  backgroundImage, leftBtnText, rightBtnText }) => {
  return (
      <Wrap bg={backgroundImage}>
          <Fade bottom>
          <ItemText>
              <h1>{title}</h1>
              <p>{desc}</p>
              </ItemText>
              </Fade>
          <Buttons>
              <Fade botttom>
                    <ButtonGroup>
                    <LeftButton>
                       {leftBtnText}
                  </LeftButton>
                  {rightBtnText && <RightButton>
                        {rightBtnText}
                    </RightButton>}
                    
                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
          

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover; 
background-position: center;
background-repeat: no-repeat;
// background-image: url("/images/model-s.jpg");
display: flex;
flex-direction: column; 
justify-content: space-between;
align-content: center;
background-image: ${props => `url("/images/${props.bg}")`}
`
const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;

    }
`
const LeftButton = styled.div`
    background: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color #fff;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 100px;
    opacity: 0.85;
    text-transform: Uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 700; 

`
const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
// margin-top:  20px;
height: 40px;
animation: animateDown infinite 1.5s;


`
const Buttons = styled.div`

`