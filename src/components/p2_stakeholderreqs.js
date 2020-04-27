import React from 'react'
import styled from 'styled-components'
import { Header6, Body, Lead } from '../layouts/typography'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faStar } from "@fortawesome/free-solid-svg-icons"
import pic from '../images/p2_stakereqs.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 90px 0px;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 10px 24px 0px;
    }
` 

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;

    @media (max-width: 768px) { 
        width: 100%;
    }

` 

const OverViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;   
    }

    @media (max-width: 400px) {
        flex-direction: column;  
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media (max-width: 768px) {
        margin: 20px 0px 0px;
        order:1;
    }
` 

const Title = styled(Header6)`    
    margin-top: 0px;
    margin-bottom: 32px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
` 

const Description = styled(Body)`
    width: 1000px;
    color: rgba(0,0,0,0.7);

    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 10px;
    }

` 

const ReqTitle = styled(Lead)`
    width:500px;

    @media (max-width: 768px) {
        width: 100%;
    }
    
    @media (max-width: 500px) {
        width: 100%;
    }
`

const ReqContent = styled(Body)`
    color: rgba(0,0,0,0.7);
`

const Image = styled.img`
    width: 500px;
    display: flex;   
    
    @media (max-width: 768px) {
        margin: 10px 0px 20px;
        height: 50%;
        width: 50%;
        order:2;
    }

    @media (max-width: 500px) {
        margin: 30px 0px 20px;
        width: 100%;
        order:2;
    }
`




const StakeholderReqs = React.memo(() => {
    return (
        <Container>
            <Content>
                <Title>Fleshing out stakeholder requirements</Title>
                <Description>
                    Having met with the engineering team to discuss the technical workflow and constraints, 
                    I worked with leadership to determine the business goals and advocate the user needs for this feature.
                </Description>
                <OverViewContainer>
                    <OverViewContent>
                        <ReqTitle>
                            Customer Requirements
                        </ReqTitle> 
                        <ReqContent>
                            <li>Instill confidence during testing</li>
                            <li>Streamline testing flow</li>
                            <li>Easily navigate to correct test</li>
                        </ReqContent>
                        <ReqTitle>
                            Business Requirements
                        </ReqTitle> 
                        <ReqContent>
                            <li>Increase successful app tests</li>
                            <li>Increase number of tests per user</li>
                            <li>Increase number of users</li>
                        </ReqContent>
                    
                    </OverViewContent>
                    <Image src={pic} />
                </OverViewContainer>            
            </Content>
        </Container>
    )
})

export default StakeholderReqs
