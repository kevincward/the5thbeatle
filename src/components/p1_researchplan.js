import React from 'react'
import styled from 'styled-components'
import compet from '../images/ic_donate_compet.svg'
import inter from '../images/ic_donate_inter.svg'
import indus from '../images/ic_donate_indus.svg'


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
    width: 48px;
    height: 48px;
    margin-right: 18px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
`

const ItemTitle = styled.div`
    object-fit: contain;
    font-size: 21px;
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
            Getting into research
            </Title>
            <Description>
                I needed to uncover the needs and pain points of mobile donors so that I could identify opportunities for the 
                native donate feature. I started out by reviewing competitors’ mobile donation tools to better understand how 
                to appeal to donors. I also sought to understand the trends that set the standard in the non-profit sector.  
            </Description>
            <Content>
                <Items>
                    <Item 
                        icon={inter}
                        title='In-Depth Interviews'
                        description='Interviewed 16 donors about previous donation experiences.'
                    />
                    <br />
                    <Item 
                        icon={compet}
                        title='Competitive Analysis'
                        description='Analyzed the strengths, weaknesses, similarities, and differences between competitors.'
                    /> 
                    <br />
                    <Item 
                        icon={indus}
                        title='Industry Standards'
                        description='Evaluated latest donor behavior reports from GuideStar, Charity Navigator, etc.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ResearchPlan