import React from 'react'
import styled from 'styled-components'

import { Header5, Body } from '../layouts/typography'



const Background = styled.div`
    background: url(${({ heroImgURL }) => heroImgURL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 768px) {
        height: 20rem;
    }
`

const Container = styled.div`
    display: flex;
    margin: 00px 120px 0px;
    flex-direction: column;

    @media (max-width: 768px) {
        margin: 20px 24px 0px;
    }
`

const Content = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        justify-content: left;
        padding-top: 60px;
        width: 400px;
    }    
   
` 

const Title = styled(Header5)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 32px;

    
    @media (max-width: 768px) {
        font-size: 1.75rem;
        line-height: 2.125rem;
        width: 100%;
        margin-bottom: 30px;
    }
`

const Description = styled(Body)`    
    color: rgba(0, 0, 0, 0.7);
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 90%;

    @media (max-width: 768px) {
        width: 100%
    }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);

`

const solution = React.memo(({ title, description, heroImgURL, id}) => {
    return (
        <Background heroImgURL={heroImgURL} id={id}>
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