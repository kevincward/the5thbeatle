import React from 'react'
import styled from 'styled-components'
import check from '../images/ic_learningcheck.svg'
import x from '../images/ic_learningx.svg'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 120px 24px 60px;
    }
`

const Title = styled.div`
    width: 565px;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 32px;
    }
`

const Description = styled.div`

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
`

const Content = styled.div`
    display: flex;
    font-size: 32px;
    flex-direction: row;
    padding: 20px 0px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 75%;
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
    
    margin-right: 18px;
   
`

const ItemTitle = styled.div`
    object-fit: contain;

    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #000000;
`

const ItemDescription = styled.div`

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.7);
`

const ItemContent = styled.div`
    
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
            Findings from sessions
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