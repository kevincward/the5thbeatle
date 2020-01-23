import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const SectionGroup = styled.div `
    background: #FFFFFF;
    height: 350px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;

    @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`
const Colorblock = styled.div`
    background: #540D6E;
    height: 200px;
    padding-top: 200px;
    padding: 3.5rem 5rem 3rem;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        margin: 0 10px;
    }
`

const SectionTitle = styled.h3`
    margin: 0;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    font-size: 34px;
    line-height: 1.2;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    
    @media (max-width: 640px) {
       font-size: 24px; 
    }

`

const CardCarousel = styled.div` 
  position: relative;
  top: 200px;
  margin-left: auto;
  width: 62%;
  border-radius: 8px;
`

const caseStudy = props => (
    <SectionGroup>
        <CardCarousel>
        <Card
        title="Designing a mobile giving experience for all"
        text="PayPal" 
        link="Learn More" 
        />
        </CardCarousel>
        <Colorblock>
            <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
            </SectionTitleGroup>  
        </Colorblock>    
            
        
    </SectionGroup>
)

export default caseStudy