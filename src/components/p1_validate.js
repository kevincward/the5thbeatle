import React from 'react'
import styled from 'styled-components'
import check from '../images/ic_learningcheck.svg'
import x from '../images/ic_learningx.svg'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 20px 24px 0px;
    }
`

const Title = styled.div`
    width: 565px;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: 100%;
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
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #000000;
    padding-bottom: 10px;

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
                What users have to say
            </Title>
            <Description>
            I turned the low-fi flow into an Invision prototype and tested it with 5 participants who had previous experience with the PayPal app. 
            I looked for usability issues and comprehension of the feature. I wanted to see if they could select a charity, find more information about 
            the charity, and follow the donation flow to completion. I was also interested in their impressions of the overall donation experience.  
            </Description>
            <Content>
                <Items>
                    <Item 
                        icon={check}
                        title='Donors willing to share location to see nearby charities'
                        description='3 of the participants had no problems with sharing their location (to see nearby charities) when using the app, but didn’t want to have location services on all of the time because it drained their phone battery. 1 participant was willing to share their location all the time. 1 participant never wanted to share their location.'
                    />
                    <br />
                    <Item 
                        icon={x}
                        title='Image carousel not working'
                        description='Image carousel on charity profile screen was not discoverable or expected. Merchant profiles only show a logo in this section.'
                    /> 
                    <br />
                    <Item 
                        icon={check}
                        title='Opt in to share personal info at the end of the flow'
                        description='3 of the participants expected to find the personal information share opt in on the donation amount screen, the flow up until this point didn’t feel like apart of the transaction.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ResearchPlan