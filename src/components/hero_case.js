import React from 'react'
import styled from 'styled-components'
import './Card.css'

const Background = styled.div`
    background: url(${({ heroImgURL }) => heroImgURL});
    height: 28rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    @media (max-width: 768px) {        
        height: 24rem;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20%;
` 

const Content = styled.div`
    height: 440px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        justify-content: left;
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
    @media (max-width: 768px) {
        width: 200px;
        font-size: 24px;
    }

` 

const HeroCase = React.memo(({ title, heroImgURL, img}) => {
    return (
      <Background heroImgURL={heroImgURL}>
        <Container>
            <Content>
                <Img src={img}/>
                <Title>
                    {title}
                </Title>
            </Content>
        </Container>
     </Background>
    )
})

export default HeroCase