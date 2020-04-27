import React from 'react'
import styled from 'styled-components'
import { Header5, Lead, Body } from '../layouts/typography'

import compet from '../images/ic_donate_compet.svg'
import inter from '../images/ic_donate_inter.svg'
import indus from '../images/ic_donate_indus.svg'


const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 30px 24px 40px;
    }
`

const Title = styled(Header5)`  
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
            Getting into research
            </Title>
            <Description>
                Creating PayPal’s first native donation experience meant that we had the opportunity to improve upon the current mobile web flow. 
                To do this, I had to uncover the needs and pain points of mobile donors.  
            </Description>
            <Content>
                <Items>
                    <Item 
                        icon={inter}
                        title='What are users’ donation experiences?'
                        description='In-depth interviews with 16 donors about previous donation experiences.'
                    />
                    <br />
                    <Item 
                        icon={compet}
                        title='What’s out there?'
                        description='Analyzed the strengths, weaknesses, similarities, and differences between other donate flows.'
                    /> 
                    <br />
                    <Item 
                        icon={indus}
                        title='What are typical donor behaviors?'
                        description='Evaluated the latest reports from GuideStar, Charity Navigator, etc.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ResearchPlan