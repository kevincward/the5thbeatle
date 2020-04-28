import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from "react-scroll"
import './Card.css'
import { Header5, Header6, Body, Caption } from '../layouts/typography'

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
    width: auto;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        padding: 40px 20px 0px;
 
    }

    @media (max-width: 500px) {
        padding: 20px 20px;    
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
        margin-top: 0px;
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
    margin: -10px auto 0;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        width: 90%;
        margin: 0px auto 0px;
    }

    @media (max-width: 500px) {
        margin: 10px auto -10px;
        padding: 24px 16px;
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

const OverView3 = props => (
    <Container>
        <Content>
            <OverViewContainer>
                <OverViewContent>
                    <Title>Overview</Title>
                    <Description>
                        Now that the native PayPal donation feature was live, we wanted to improve the experience so that more users would discover and 
                        be encouraged to donate within the app. After conducting user research and identifying technical limitations, I designed the 
                        updates which would help to increase engagement with the product. 
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
                                8 months
                            </div>}
                    />
                </RoleContainer>
            </OverViewContainer>            
        </Content>
        <Experience>
            <ExpTitle>
                How can we promote feature discovery and design triggers to increase donations?
            </ExpTitle>
            <ExpDescription>
            How do we help new users discover the PayPal app donate feature? How do we remind current donors 
            using PayPal to donate? How do we encourage donating without being annoying?
            </ExpDescription>
            <SkipLink onClick={() => {
                scroll.scrollTo(
                    document.getElementById("Solution3").offsetTop - 100
                    )
            }}>
                Skip process and see where we landed <ItemArrow src={arrow} />
            </SkipLink>
        </Experience>
    </Container>
)

export default OverView3