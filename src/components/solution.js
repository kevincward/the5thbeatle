import React from 'react'
import styled from 'styled-components'


const Background = styled.div`
    background: url(${({ heroImgURL }) => heroImgURL});
    height: 29rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 90px;
    @media (max-width: 768px) {
        margin: 60px 24px;
    }
`

const Title = styled.div`
    width: 565px;    
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    width: 80%;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 24px;
    }
`
const Description = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    width: 80%;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
`

const Content = styled.div`
    height: 500px;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        justify-content: left;
    }    
` 

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const solution = React.memo(({ title, description, heroImgURL}) => {
    return (
        <Background heroImgURL={heroImgURL}>
            <Container>            
                <Content>
                    <TextContainer>
                        <Title>
                            {title}
                        </Title>
                        <Description>
                            {description}
                        </Description>
                    </TextContainer>
                </Content>
            </Container>
        </Background>
    )
})

export default solution