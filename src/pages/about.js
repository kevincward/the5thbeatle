import React from 'react'
import styled from "styled-components"
import Me from "../images/me.jpg"
import Layout from '../layouts'

const Container = styled.div`
    display: flex;
    padding: 160px 30px 80px;
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 60px 15px 44px;
    }
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(0,0,0,0.7);
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`

const Img = styled.img`
  width: 45%;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 32px 0;
  }
`

const Content = styled.div`
  width: 60%;
  margin-left: 80px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`

const HeadLine = styled.div`
  color: #000000;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  font-size: 34px;
  line-height: 1.5;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
      @media (max-width: 768px) {
        margin-bottom: 0px;
      }
  
`

const About = () => {    

  
  return (
    <Layout>
      <Container>
        {typeof window !== 'undefined'? (window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Hello, I'm Kevin Ward</HeadLine>
        : null): null}
        <Img src={Me} />
        <Content>
          {typeof window !== 'undefined'?(!window.matchMedia('(max-width: 768px)').matches ? 
            <HeadLine>Hello, I'm Kevin Ward 👋</HeadLine>
          : null):null}
          <Text>
            <br />
            I’m a product designer that strives to leave a positive impact on people through the products I work on. My design career started out when I got a job with 
            an art dealer while pursuing an art degree. I created all of their marketing materials, books, and posters. I built a foundation in print design which 
            transitioned into digital work where I learned about designing for responsive interfaces and leveraging design systems. I began studying the design thinking 
            process and focused on honing my research and strategizing skills to match my visual skills. 7 years later, I continue to sharpen my skill set by taking on 
            complex problems and exploring new styles.
            <br />
            <br />
            I've worked on solving problems in multiple industries including finance, health, cannabis, travel, philanthropy, and 
            agriculture. My working environments have ranged from small startups to large corporations to state government. Each industry and team size has brought 
            its own unique set of challenges and experiences I carry with me to inform my design thinking.
            <br />
            <br />
            When I’m not working, I can be found painting, exploring the US, and working on my 100 year old home (something is generally broken).
            <br />
            <br />
            <b>Hats worn:</b> Product Designer, UI Designer, UX Researcher, Marketing Manager, UI Developer
            <br />
            <br />
            <b>Some of the companies I have worked with:</b> PayPal, Venmo, Xoom, the Bill & Melinda Gates Foundation, California Franchise Tax Board, the San Francisco Marathon
            <br />
            <br />
          </Text>
        </Content>        
      </Container>
    </Layout>
  )
}

export default About