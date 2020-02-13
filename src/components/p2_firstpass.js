import React from 'react'
import styled from 'styled-components'

import time from '../images/ic_canna_time.svg'
import acc from '../images/ic_canna_acc.svg'
import twopart from '../images/ic_canna_twopart.svg'
import wall from '../images/ic_wall.svg'


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
    margin-top: 12px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

const SecondTitle = styled.div`
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
const Img = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 11px;
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

const Firstpass = () => {    

    return (
        <Container>
            <Title>
                First pass at the flow with engineering team
            </Title>
            <Description>
            Since every strain of cannabis is a little different, users would need to create a unique profile (also called a strain map) for the plant they are using. Once the strain map has been created, the user would need to select it when testing their infusion so tCheck accounts for its characteristics. 
            </Description>
            <br />
            <br />
            <TitleContainer>
            <Img src={wall}/>
                <SecondTitle>Flow complexities</SecondTitle>
            </TitleContainer>
            <Content>
                <Items>
                    <Item 
                        icon={time}
                        title='It’s timed'
                        description='User will need to follow set up of steps in a 5 mintue window to accurately create a strain map.'
                    />
                    <br />
                    <Item 
                        icon={acc}
                        title='Accessories required'
                        description='User will need to use a set of tools in a specific order.'
                    /> 
                    <br />
                    <Item 
                        icon={twopart}
                        title='Its a two part process'
                        description='Mapping a strain is a brand new workflow in the app and doubles the amount work for the user (compared to the other potency tests).'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default Firstpass