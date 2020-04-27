import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body } from '../layouts/typography'

import check from '../images/ic_learningcheck.svg'
import x from '../images/ic_learningx.svg'


const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 50px 24px -30px;
    }
`

const Title = styled(Header6)`  
    color: #000000;
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 0px;

    @media (max-width: 768px) {
        margin-bottom: 5px;
    }

    @media (max-width: 500px) {
        margin-bottom: 15px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 85%;
    margin-right: 10%;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
`

const ImgIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-top: 10px;
    margin-right: 18px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
    
    @media (max-width: 768px) {
        margin-right: 14px;
    }
`

const ItemTitle = styled(Lead)`
    margin-top: 0px;
    margin-bottom: 10px;
    object-fit: contain;
`

const ItemDescription = styled(Body)`
color: rgba(0, 0, 0, 0.7);
margin-top: 0px;
margin-bottom: 0px;
`

const ItemContent = styled.div`
    width: 100%;   
`

const Item = ({icon, title, description}) => {
    return (
        <ItemContainer>
            <ImgIcon src={icon} />
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const ResearchPlan = () => {    

    return (
        <Container>
            <Title>
                What users had to say
            </Title>
            <Description>
            I turned the flow into an Invision prototype and tested it with 5 participants who had previous experience with the PayPal app. 
            I looked for usability issues and comprehension of the feature. I wanted to see if they could select a charity, find more information about 
            the charity, and follow the donation flow to completion. I was also interested in their impressions of the overall donation experience.  
            </Description>
            <Content>
                <Items>
                    <Item 
                        icon={check}
                        title='Donors willing to share location to see nearby charities'
                        description='Most participants had no problems with sharing their location (to see nearby charities) when using the app, but didn’t want to have location services on all of the time because it drained their phone battery.'
                    />
                    <br />
                    <Item 
                        icon={x}
                        title='The image carousel not working'
                        description='The image carousel on the charity profile screen was not discoverable or expected. Merchant profiles only show a logo in this section.'
                    /> 
                    <br />
                    <Item 
                        icon={check}
                        title='Personal information opt in would be best placed at the end of the flow'
                        description='Most participants expected to find the personal information share opt in on the donation amount screen, the flow up until this point didn’t feel like apart of the transaction.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ResearchPlan