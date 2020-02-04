import React from 'react'
import styled from 'styled-components'
import './Card.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto 120px;
    padding: 32px;
    @media (max-width: 768px) {
        margin: 60px auto 0px;
    }
` 

const Content = styled.div`
    height: 800px;
    width: auto;
    border-radius: 10px;
    background-color: #f8f8f8;
    padding: 64px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        padding: 32px 23px;
        width: auto;
        margin-bottom: 300px;
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
    font-family: Inter;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.47px;
    color: #000000;
    margin-bottom: 12px;
    @media (max-width: 768px) {
        text-align: center;
    }
` 

const Description = styled.div`
    font-family: Inter;
    font-size: 16px;
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
    font-family: Inter;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #000000;
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
    font-family: Inter;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.09px;
    color: rgba(0, 0, 0, 0.7);
` 

const Experience = styled.div`
    width: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin-top: 60px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 0px;
        padding: 24px 16px;
    }
` 

const ExpTitle = styled.div`
    font-family: Inter;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    text-align: left;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: auto;
        font-size: 24px;
        margin-bottom: 16px;
    }
` 

const ExpDescription = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
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
                    
                </OverViewContent>
                <RoleContainer>
                <Title>
                    Search, for all kinds of donors
                </Title>
                <Description>
                    <li>A sticky search bar at the top for users who know what they are looking for</li> 
                    <li>Nearby charities list for new donors looking for local giving options</li>
                    <li>Dynamic featured list for donors looking for a familiar charity</li>
                </Description>

                <Title>
                    Individual charity pages
                </Title>
                <Description>
                    Each page features the charity’s logo and location for easy recognition, impact  statement to drive emotional 
                    appeal, and EIN number to prove the charity’s legitimacy.
                </Description>

                <Title>
                    Adjustable anonymity
                </Title>
                <Description>
                    Leveraging the existing amount selection app pattern, I added a share personal information opt-out, giving 
                    the user more control of their privacy.
                </Description>

                <Title>
                    Sharing the charity you support
                </Title>
                <Description>
                    Building on the confirmation screen app pattern, I added a native share option so the user could share their cause 
                    to the platform of their choice. The share message autopopulates with the charity’s name and a link to their charity profile.  
                </Description>
                    
                </RoleContainer>
            </OverViewContainer>
            <Experience>
                <ExpTitle>
                    The Results
                </ExpTitle>
                <ExpDescription>
                    We launched the feature and saw slow adoption. We reviewed the analytics on weekly basis to monitor for where 
                    dropoff occurred and began speculating how to make improvements. As Giving Tuesday drew near, we partnered with
                    the marketing team to bring awareness to donating with the PayPal app. The marketing effort brought 
                </ExpDescription>
                <br />
                <br />
                <ExpTitle>
                    $1.5 million TPV
                </ExpTitle>
                <ExpDescription>
                It may have taken a couple of months for the Donate feature to take off but when it did, we started to see strong numbers 
                on a monthly basis. By June 2017 (one year after launch), PayPal saw 1.5 million in total payment volume through the app 
                donate feature.
                </ExpDescription>
            </Experience>
        </Content>
    </Container>
)

export default OverView