import React from 'react'
import styled from 'styled-components'
import { sizes } from "../layouts/Layout"


const Herobkgd = styled.div`
    background: #ffffff;
    height: 520px;
    background: url('../images/hero_backgd.svg');
    background-size: cover;
    background-position: center;
    position: relative;
` 

const HeroGroup = styled.div`
    max-width: 500px;
    margin: 1 auto;
    padding: 150px 50px;
    text-align: left;
` 

const Title = styled.h1`
    color: #000000;
    margin: 0;
    font-family: Inter;
    -webkit-font-smoothing: antialiased;
    font-size: 34px;
    line-height: 1.2;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`
  
const Text = styled.p`
    color: #000000;
    font-family: Inter;
    font-size: 18px;
    line-height:1.5;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
`
  
const Link = styled.a`
    color: #540D6E;
    font-family: Inter;
    font-size: 21px;
    font-weight: 800;
    line-height:1.5;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
`
  
 
  

const Hero = () => {

    return (
        
        <Hero>
          <HeroGroup>
            <Title>I am the fifth Beatle. <br /><br />
            While my band is on hiatus, I look for problems and design solutions.</Title>
            <br />
            <Text>UX Director at <Link href="https://tcheck.me" target="_blank">Engineered Medical Technologies</Link></Text>
          </HeroGroup>
        </Hero>
     
        )
    }
    
    export default Hero