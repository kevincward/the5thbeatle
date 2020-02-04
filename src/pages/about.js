import React from 'react'
import styled from "styled-components"
import Header from '../components/header'
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
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
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
  width: 35%;
  height: auto;
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
  font-family: Inter;
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
        {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Hello, I'm Kevin Ward</HeadLine>
        : null}
        <Img src={Me} />
        <Content>
          {!window.matchMedia('(max-width: 768px)').matches ? 
            <HeadLine>Hello, I'm Kevin Ward</HeadLine>
          : null}
          <Text>
            <br />
            I’m a self taught designer that strives to leave a positive impact on people through the products I work on. I live in Sacramento, 
            CA and have a background in traditional art. While working for an art dealer many years ago, I was given the option to design all of their marketing 
            materials, books, and posters. I built a foundation in print design which transitioned into user interface design to user experience design.
            <br />
            <br />
            I’ve spent the last 7 years in product design working in diverse industries including finance, health, cannabis, travel, philanthropy, and 
            agriculture with environments ranging from small startups to large corporations to state government. Each industry and team size has brought 
            its own unique set of challenges and experiences I carry with me to inform my design thinking.
            <br />
            <br />
            When I’m not at work, I can be found painting, exploring California, and working on my 100 year old home (something is generally broken).
            <br />
            <br />
            <b>Hats worn:</b> Product Designer, UI Designer, UX Researcher, Marketing Manager, UI Developer
            <br />
            <b>Some of my favorite companies to work with:</b> PayPal, Venmo, Xoom, the Bill & Melinda Gates Foundation, California Franchise Tax Board, the San Francisco Marathon
            <br />
            <br />
          </Text>
        </Content>        
      </Container>
    </Layout>
  )
}

export default About