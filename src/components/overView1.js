import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from "react-scroll"
import './Card.css'
import arrow from '../images/ic_arrow_b.svg'

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
    height: 474px;
    width: auto;
    border-radius: 20px;
    background-color: #f8f8f8;
    padding: 64px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        padding: 20px 20px;
        width: auto;
        height: 600px;        
    }
` 

const OverViewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 60px;
    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 32px;
    }
` 

const Title = styled.div`    
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: -0.47px;
    color: #000000;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
        text-align: center;
    }
` 

const Description = styled.div`
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0,0,0,0.7);   
` 

const RoleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
` 

const RoleContent = styled.div`
    display: flex;
    flex-direction: column;    
` 

const RoleTitle = styled.div`    
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #000000;
` 
const ItemArrow = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    top: 2px;

`

const HorizontalBar = styled.div`
    width: 80px;    
    border: solid 1px #f7991e;
    margin: 10px 0px;
` 

const Br = styled.div`
    width: 100%;
    height: 20px;
` 


const RoleDescription = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.09px;
    color: rgba(0, 0, 0, 0.7);
` 

const Experience = styled.div`
    width: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin: -200px auto 0;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 80%;
        margin: -50px auto 0;
        padding: 24px 16px;
    }
` 


const ExpTitle = styled.div`
    width: 600px;    
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    text-align: center;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: auto;
        font-size: 28px;
        margin-bottom: 16px;
    }
` 

const ExpDescription = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
`

const SkipLink = styled.a`    
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -0.1px;
    text-align: center;
    color: #540D6E;
    cursor: pointer;
    margin-top: 24px;
    transition: all 300ms ease 0s;    
    &:hover {
        transform: translateY(3px);        
    }

    @media (max-width: 768px) {
        margin-top: 16px;
    }
`

const Role = ({title, description}) => {
    return (
        <RoleContent>
            <RoleTitle>{title}</RoleTitle>
            <HorizontalBar />
            <RoleDescription>{description}</RoleDescription>
        </RoleContent>
    )
}

const OverView = props => (
    <Container>
        <Content>
            <OverViewContainer>
                <OverViewContent>
                    <Title>Overview</Title>
                    <Description>
                        An overhaul of the PayPal native app created an opportunity for a native 
                        donate experience for the first time. 
                        I designed the donation experience and worked with the social impact product 
                        and engineering teams to define business goals and technical limitations. I collaborated with 
                        the app team to ensure my designs were consistent with the rest of the app.
                    </Description>
                </OverViewContent>
                <RoleContainer>
                    <Role 
                        title="Role"
                        description={
                            <div>
                                UX research
                                <Br /> 
                                UX/UI design
                                <Br /> 
                                Interactive prototyping
                                <Br /> 
                            </div>}
                    />
                    <Role 
                        title="Timeline"
                        description={
                            <div>
                                6 months
                            </div>}
                    />
                </RoleContainer>
            </OverViewContainer>            
        </Content>
        <Experience>
            <ExpTitle>
                What should a donation experience in a financial app look like?
            </ExpTitle>
            <ExpDescription>
                The primary app tasks include checking your balance and account activity, 
                sending money, and paying off a credit bill. How might a donate feature fit 
                in with these tasks? Why would someone use an app to donate instead of a charity’s website?
            </ExpDescription>
            <SkipLink onClick={() => {
                scroll.scrollTo(
                    document.getElementById("Solution1").offsetTop - 100
                    )
            }}>
                Skip process and see where we landed <ItemArrow src={arrow} />
            </SkipLink>
        </Experience>
    </Container>
)

export default OverView