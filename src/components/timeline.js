import React from 'react'
import styled from 'styled-components'
import { sizes } from "../layouts/Layout"


const Container = styled.div`
    background: #FFFFFF;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Title = styled.p`
  margin: 0;
  color: #000000;
  -webkit-font-smoothing: antialiased;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Text = styled.p`
    font-size: 18px;
    color: black;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 500px) {
        max-width: 300px;
    };
`

const timeline = () => {

return (
        <Container>

            <Title>Cannabis tester for infusions</Title>
            <Text>
            Collect live readings of your sample* in minutes using the tCheck and your phone. 
            Test isolate infused olive oil, coconut oil, alcohol, or butter for THC, THCa, or CBD.
            </Text>
            
    
        </Container>
 
    )
}

export default timeline