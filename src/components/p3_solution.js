import React from 'react'
import styled from 'styled-components'
import { Header5, Body, Lead } from '../layouts/typography'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faStar } from "@fortawesome/free-solid-svg-icons"
import solutionscreen from '../images/p3_sol_bkgd.png';

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
    width: 500px;

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
    @media (max-width: 768px) {
        width: 100%;
        order:1;
    }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  position: relative;
  margin-left: 2px;
  padding-right: 10px;
  color: rgba(239,66,102,0.2);

`




const P3Solution = React.memo(({id}) => {
    return (
        <Container>
            <Content>
                <OverViewContainer>
                    <OverViewContent id={id}>
                        <Title>The solution</Title>
                        <Description>
                            <p>
                            We released the disaster relief notification into the notification framework and it launched with the PayPal apps updated notfications. 
                            </p>
                            <p>
                            My product manager and I decided to focus on a simple 'donate again to a charity you previously supported' tile for the first version of the tile.
                            </p>
                        </Description>
                    </OverViewContent>
                    <Image src={solutionscreen} />
                </OverViewContainer>            
            </Content>
        </Container>
    )
})

export default P3Solution
