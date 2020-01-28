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
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #333333;
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
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`

const HeadLine = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #333333;
  margin-bottom: 44px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`

const About = () => {    

  
  return (
    <Layout>
      <Container>
        {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null}
        <Img src={Me} />
        <Content>
          {!window.matchMedia('(max-width: 768px)').matches ? 
            <HeadLine>Headline</HeadLine>
          : null}
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
             in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Content>        
      </Container>
    </Layout>
  )
}

export default About
