import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from "react-scroll"
import { Header5, Header6, Body, Caption } from '../layouts/typography'
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
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        padding: 40px 20px;
        width: auto;       
    }

    @media (max-width: 500px) {
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
    width: 70%;
    margin-right: 60px;

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 32px;
    }
` 

const Title = styled(Header6)`    
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

const RoleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 35%;
    
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
` 

const RoleContent = styled.div`
    display: flex;
    flex-direction: column; 
    padding-left: 20px;
    padding-right: 40px;   
` 

const RoleTitle = styled(Body)`    
    font-weight: bold;
    line-height: 0;
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

const RoleDescription = styled(Caption)`    
    color: rgba(0, 0, 0, 0.7);
    line-height: 1rem;
` 

const Experience = styled.div`
    width: 70%;
    max-width: 900px;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin: -240px auto -50px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        width: 90%;
        margin: -30px auto 20px;
        padding: 24px 16px;
    }

    @media (max-width: 500px) {
        margin: 250px auto 0;
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

const SkipLink = styled.a`    
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;
    color: #540D6E;
    cursor: pointer;
    margin-top: 16px;
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
                        tCheck, the world’s first handheld live cannabis potency tester was about to get even better. To date, the device tested cannabis concentrate based infusions. The engineering team had just discovered how to introduce a much requested feature, cannabis plant based infusions, into the tCheck device. However, to use this new feature, 
                        users would need to complete a complicated flow. Could this multi-step flow really work alongside tCheck other simple measurement flows? 
 
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
                How do we make a complex scientific process easy to perform?
            </ExpTitle>
            <ExpDescription>
                If the user skips any steps in the flow, their results will not be 
                accurate. How do we explain the additional test prep needed? How can 
                we help the user feel confident that they can complete a test?
            </ExpDescription>
            <SkipLink onClick={() => {
                scroll.scrollTo(
                    document.getElementById("Solution2").offsetTop - 100
                    )
            }}>
                Skip process and see where we landed <ItemArrow src={arrow} />
            </SkipLink>
        </Experience>
    </Container>
)

export default OverView