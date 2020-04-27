import React from 'react'
import styled from 'styled-components'
import { Header5, Body, Lead } from '../layouts/typography'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCannabis } from "@fortawesome/free-solid-svg-icons"
import solutionscreen from '../images/p2_sol_bkgd.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: -40px 40px 0px;
    align-items: center;
    
    @media (max-width: 768px) {
        margin: -30px 24px 40px;
    }
` 

const Content = styled.div`
    display: flex;

    @media (max-width: 768px) { 
        width: 100%;
        flex-direction: column; 
    }

` 

const OverViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;   
    }

    
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 90px;
    justify-content: center;
    width: 400px;

    @media (max-width: 768px) {
        margin: 30px 0px 20px;
        order:2;
    }
    
` 

const Title = styled(Header5)`    
    color: #000000;
    margin-top: 0px;
    margin-bottom: 12px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
` 

const Description = styled(Body)`
    width: 500px;
    color: rgba(0,0,0,0.7);

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        width: 60%;
    }
` 

const Themes = styled(Lead)`
    width: 1000px;

    @media (max-width: 768px) {
        width: 70%;
    }
    
    @media (max-width: 500px) {
        width: 60%;
    }
`

const Image = styled.img`
    display: flex;
    
    @media (max-width: 768px) {
        width: 100%;
        align-items: right;
        order:1;
        
    }

    @media (max-width: 400px) {
        width: 375px;
        order:1;
    }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  position: relative;
  margin-left: 2px;
  padding-right: 10px;
  color: rgba(59,206,172,0.4);

`




const P2Solution = React.memo(({id}) => {
    return (
        <Container>
            <Content>
                <OverViewContainer>
                    <OverViewContent id={id}>
                        <Title>The solution</Title>
                        <Description>
                        We released the plant based infusion testing flow at the beginning of 2020. We sent out an email to all our users to let 
                        them know about this new feature and saw quick adoption of the testing process. To ensure testing success, the flow features:
                        </Description>
                        <Themes>
                            <p><ArrowIcon icon={faCannabis} /> Test preparation guide</p>
                            <p><ArrowIcon icon={faCannabis} /> Step by step instructions</p>
                            <p><ArrowIcon icon={faCannabis} /> Prominent timer</p>
                            <p><ArrowIcon icon={faCannabis} /> Strain map naming</p>

                        </Themes>
                    </OverViewContent>
                    <Image src={solutionscreen} />
                </OverViewContainer>            
            </Content>
        </Container>
    )
})

export default P2Solution
