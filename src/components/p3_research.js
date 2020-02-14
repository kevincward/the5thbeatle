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
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
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
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Items = styled.div`
    
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

    font-size: 24px;
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

const Research = () => {    

    return (
        <Container>
            <Title>
            Research
            </Title>
            <Content>
                <Items>
                    <Item 
                        title='What motivates people to donate?'
                        description='As a way to keep in touch with users of our product, I ran monthly research sessions to identify opportunities to enhance the donate feature and learn about donor behavior. Over the course of several sessions, I began to better understand behavior around donation triggers.'
                    />
                </Items>
            </Content>
        </Container>
    )
}
export default Research