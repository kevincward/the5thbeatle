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
                Findings from the notification and tile testing
            </Title>
            <Content>
                <Items>
                    <Item 
                        icon={check}
                        title='Where do I donate during a disaster?'
                        description='3 participants mentioned struggling to find a charities who were directly providing relief during natural disasters. 2 participants pointed out that they feared they were being scammed by pretend supporting charities.'
                    />
                    <br />
                    <Item 
                        icon={check}
                        title='Users are willing to share their data in exchange for personalized experience'
                        description='When shown the various potential donor tiles suggesting charities based on their browsing history, contacts, or location, users expected PayPal to use the data and were not unnerved.'
                    /> 
                    <br />
                    <Item 
                        icon={x}
                        title='Users want control over charity on the dashboard'
                        description='2 participants asked how they could pick the charity that will show up (this feature was already noted as a phase 2 requirement).'
                    /> 
                    <br />
                    <Item 
                        icon={x}
                        title='Too many balances on one dashboard'
                        description='4 participants appreciated the idea of seeing a giving-to-date tile, however when stacked against their account balance and credit balance tiles, they were worried about confusion.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ResearchPlan