import React from 'react'
import styled from 'styled-components'
import paypal from '../images/ic_timeline_pp.svg'
import background from '../images/hero_background.png'
import './Card.css'

const Container = styled.div`
    display: flex;
    align-items: center;
    background: url(${background}) no-repeat;
    background-position-x: 70px;
    padding-left: 20%;
` 

const Content = styled.div`
    height: 440px;    
    display: flex;
    justify-content: center;
    flex-direction: column;        
    @media (max-width: 768px) {        
        width: 100%;
    }
    
` 

const Img = styled.img`
    width: 36px;
    height:41px;
    margin-bottom: 25px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
` 

const Title = styled.div`
    width: 364px;
    font-family: Inter;
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: normal;
    color: #333333;    
` 

const hero1 = props => (
    <Container>
        <Content>
            <Img src={paypal}/>
            <Title>
                PayPal Native Donate 
                Experience
            </Title>
        </Content>
    </Container>
)

export default hero1