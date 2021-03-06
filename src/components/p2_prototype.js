import React from 'react'
import styled from 'styled-components'
import { Header6, Body } from '../layouts/typography'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 90px 100px;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 10px 24px -20px;
    }
` 

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    @media (max-width: 768px) { 
        width: 100%;
    }

` 

const OverViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    margin-bottom: -10px;
    
    @media (max-width: 768px) {
        width: 100%; 
        flex-direction: column;  
    }

    @media (max-width: 400px) {
        flex-direction: column;  
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;

    @media (max-width: 768px) {
        margin: 20px 0px 0px;
        width: 100%; 
        order:1;
    }
` 

const Title = styled(Header6)`    
    margin-top: 50px;
    margin-bottom: 10px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
` 

const Description = styled(Body)`
    color: rgba(0,0,0,0.7);
`

const Frame = styled.iframe`  
    border: none;
    margin-left: 40px;
    
    @media (max-width: 720px) {
        margin-top: 32px;
        margin-left: 0px;
        width: 100%;
    }
`

const P2_prototype = () => (
    <Container>
            <Content>
                <OverViewContainer>
                    <OverViewContent>
                        <Title>Let’s get it in front of users</Title>
                        <Description>
                        <p>
                        I created a Marvel protoype for two testing two user segments: home ediblemakers and professional ediblemakers.
                        </p>
                        <p>
                        From this testing, I documented which steps created the most friction for evaluation and content suggestions that would improve the testing flow comprehension.
                        </p>
                        </Description>
                    </OverViewContent>
                    <Frame 
                        src="https://marvelapp.com/219d8ie6?emb=1&iosapp=false&frameless=false" 
                        width="347" 
                        height="691" 
                        allowTransparency="true" 
                        frameborder="0"             
                    /> 
                </OverViewContainer>            
            </Content>
        </Container>
)

export default P2_prototype