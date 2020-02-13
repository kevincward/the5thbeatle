import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 36px 46px;
    @media (max-width: 720px) {
        padding: 32px 23px;
        flex-direction: column;
        align-items: center;
    }
`

const Frame = styled.iframe`  
    border: none;
    @media (max-width: 720px) {
        margin-top: 32px;
        width: 272px;
        height:  544px;
    }
`

const TextContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 720px) {
        width: 100%;    
    }
`

const Header = styled.div`    
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #1a1a1a;
    margin-bottom: 32px;
    @media (max-width: 720px) {
        margin-bottom: 16px;
        font-size: 24px;
        line-height: 1.33;
        letter-spacing: normal;
        color: #000000;
    }
`

const Text = styled.div`
    width: 447px;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
    @media (max-width: 720px) {
        width: 100%;
    }
`

const P2_prototype = () => (
    <Container>
        <TextContent>
            <Header>
                Let’s get it in front of users
            </Header>
            <Text>
                I created a Marvel protoype for two testing opportunites: 
                <p>
                1. Testing in office: 5 home ediblemakers (tCheck users) who would use the prototype flow and walk through the plant based infusion potency testing process 
                with all the supplies they would need to run a test (tCheck, testing accessories, app) 
                </p>
                <p>
                From this testing, I was able to document steps that created the most 
                friction for evaluation and content suggests that would improve flow comprehension.
                </p>
                <p>
                2. Testing at the LA cannabis conference:  4 professional ediblemakers (tCheck users) who would walk through the prototype without all the testing supplies.
                </p>
            </Text>
        </TextContent>
        <Frame 
            src="https://marvelapp.com/219d8ie6?emb=1&iosapp=false&frameless=false" 
            width="347" 
            height="691" 
            allowTransparency="true" 
            frameborder="0"             
        /> 
    </Container>
)

export default P2_prototype