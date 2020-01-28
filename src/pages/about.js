import React from 'react'
import styled from "styled-components"
import Header from '../components/header'
import Me from "../images/me.jpg"
import Layout from '../layouts'

const Container = styled.div`
    display: flex;
    padding: 150px 50px;
    flex-direction: column;    
    @media (max-width: 768px) {        
    }
`

const Title = styled.div`
    width: 565px;
    font-family: Inter;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #000000;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 32px;
    }
`

const Text = styled.div`
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.7);
`


const About = () => {    

  
  return (
    <Layout>
      <Container>
        <Title>
            I am the fifth Beatle. <br /><br />
            While my band is on hiatus, I look for problems and design solutions.
        </Title>
        <Text>
            I am the fifth Beatle. <br /><br />
            While my band is on hiatus, I look for problems and design solutions.
         </Text>
      </Container>
    </Layout>
  )
}

export default About
