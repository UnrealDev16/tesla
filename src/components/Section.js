import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
    
function Section(props) {
    return ( 
    <Wrap bgImage={props.backgroundImg} id={props.id}>
        <Fade bottom>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <p>{props.desc1}</p>
        </ItemText>
        </Fade>
        
        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {props.lb}
                </LeftButton>
                { props.rb &&
                    <RightButton>
                        {props.rb}
                    </RightButton>
                }
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>
        </Buttons>
        
    </Wrap> );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(/images/model-s.jpg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")` }

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1:
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width:768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: #141414;
    border: 0px solid rgba(54, 54, 54, 0.6);
    font-weight: 600;
    position: relative;
    outline: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 256px;
    opacity: 0.85;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;

`
const RightButton = styled.div`
    background-color: white;
    border: 0px solid rgba(54, 54, 54, 0.6);
    font-weight: 600;
    position: relative;
    outline: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 256px;
    opacity: 0.75;
    color: black;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`