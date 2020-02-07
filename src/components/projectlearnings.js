import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 60px 24px;
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
        font-size: 24px;
    }
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

    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.7);
`

const ItemContent = styled.div`
    
`
const Item = ({title, description}) => {
    return (
        <ItemContainer>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const ProjectLearnings = () => {    

    return (
        <Container>
            <Title>
            Project Learnings
            </Title>
            <Content>
                <Items>
                    <Item 
                        title='Customers will use your product in ways you weren’t expecting'
                        description='After reviewing nearby charity conversions and connecting with charities receiving those 
                        donations, we learned that charities were using the app as a way to collect donations at events.'
                    />
                    <br />
                    <Item 
                        title='Competitive Analysis'
                        description='Analyzed the strengths, weaknesses, similarities, and differences between competitors.'
                    /> 
                    <br />
                    <Item 
                        title='Industry Standards'
                        description='Evaluated latest donor behavior reports from GuideStar, Charity Navigator, etc.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings