import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import Me from "../images/me.jpg"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 7rem;
`

const ProductTextSection = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;   

`

const ProductTitle = styled.div`
  margin-bottom: 2rem;
  position: relative;
  `

const ProductBody = styled.div`
`

const ProductImage = styled.img`
  max-width: 50%;
  margin-top: 10rem;
  `

const About = () => {
  return (
    <ProductRowContainer>
      <ProductImage src={Me} />
      <ProductTextSection>
        <ProductTitle>
        Expansion kit for flower and concentrate testing
        </ProductTitle>
        <ProductBody secondary>
        I’m a product designer with an affinity for balancing business challenges and user needs. I enjoy creating thoughtful products that amplify the potential of people around the world.
        <br /><br />
        In the past, I’ve lead the monetization efforts for WIRED Magazine, managed discovery research at ID8 Innovation for a Fortune 500 company, and wore many hats at Jump Associates to provide insights and strategic direction via design thinking methods for America’s most known brands. 
‍        <br /><br />
        I like to weave my architecture design problem-solving skills, design research background, systems-thinking, and experimentation mindset into the craft.
        <br /><br />
        I currently live in San Francisco and enjoy all the Bay Area has to offer. You can find me engaging with the design community in many ways like on Twitter or Dribbble and by being a regular at Product of SF, appreciating distinct architecture, collecting the different ways type is used, meditating outdoors, and exploring this wonderful planet.
        <br /><br />
        Say hello or let me know how I can help you at tiffanycyu@gmail.com or Linkedin.
        </ProductBody>
      </ProductTextSection>
    </ProductRowContainer>
  )
}

export default About
