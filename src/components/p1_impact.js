import React from 'react'
import styled from 'styled-components'
import { Header5, Body, Caption } from '../layouts/typography'
import './Card.css'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px auto 70px;
    padding: 10px;
    
    @media (max-width: 768px) {
        margin: 2px auto 0px;
        padding: 10px 0px;
    }
` 

const Content = styled.div`
    width: auto;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        padding: 40px 20px;
        width: auto;       
    }

    @media (max-width: 375px) {
        padding: 20px 20px;
        width: auto;       
    }
` 

const OverViewContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin-right: 60px;

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 32px;
    }
` 

const Title = styled(Header5)`    
    color: #000000;
    margin-top: 0px;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
        text-align: center;
    }
` 

const Description = styled(Body)`
    color: rgba(0,0,0,0.7); 

` 


const Experience = styled.div`
    width: 70%;
    max-width: 900px;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin: 0px auto 0;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        width: 90%;
        margin: -40px auto 0;
        padding: 24px 16px;
    }

    @media (max-width: 500px) {
        margin: -20px auto 0;
    }
` 


const ExpTitle = styled(Header5)`
    max-width: 600px;   
    text-align: center;
    color: #000000;
    margin-bottom: 12px;
    margin-top: 0;
    
    @media (max-width: 768px) {
        width: auto;
        font-size: 1.75rem;
        line-height: 2.125rem;
    }
` 

const ExpDescription = styled(Body)`    
    color: rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
        max-width: 540px;
    }
`


const Impact = props => (
    <Container>
        <Content>
            <OverViewContainer>
                <OverViewContent>
                    <Title>Impact</Title>
                    <Description>
                    We launched the feature and saw slow adoption. We reviewed the analytics on weekly basis to 
                    monitor where drop off was occurring and began speculating how to make improvements. As Giving 
                    Tuesday drew near, we partnered with the marketing team to bring awareness to donating with the 
                    PayPal app. This collaboration paid off greatly, we saw a spike in new donors from Black Friday 
                    through the holidays.
                    </Description>
                </OverViewContent>
            </OverViewContainer>            
        </Content>
        <Experience>
            <ExpTitle>
                $1.5 million TPV
            </ExpTitle>
            <ExpDescription>
                It may have taken a couple of months for the Donate feature to take off but when it did, we started to see strong 
                numbers on a monthly basis. By June 2017 (one year after launch), PayPal saw 1.5 million in total payment volume 
                through the app donate feature.
            </ExpDescription>
        
        </Experience>
    </Container>
)

export default Impact