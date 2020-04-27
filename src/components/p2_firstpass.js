import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image"
import { Header5, Header6, Lead, Body } from '../layouts/typography'

import time from '../images/ic_canna_time.svg'
import acc from '../images/ic_canna_acc.svg'
import twopart from '../images/ic_canna_twopart.svg'
import image from '../images/p2_firstpass.jpg'

const Container = styled.div`
    display: flex;
    margin: 40px 90px 0px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 30px 24px 40px;
    }
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;   
    }
`

const Title = styled(Header5)`  
    width: 400px;
    margin-top: 0px;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 10px;

    @media (max-width: 768px) {
        margin-top: 0px;
    }
`



const SecondTitle = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 35px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 0px 10px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 70px 0px 10px;

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


const Image = styled.div`
    width: 50%;
    height: auto;
    margin-left: 90px;
   
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        margin-left: 0px;
    }

    .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
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
            <TopContainer>
                <TextContent>
                    <Title>
                        First pass at the flow with engineering team
                    </Title>
                    <Description>
                        Since every strain of cannabis is a little different, users would need to account for the delta of their plant's genetic makeup (also called a strain map). This would require multiple measurements taken on a consecutive timeline. Once the strain map has been created, the user would need to select it when testing their infusion so tCheck accounts for its characteristics. 
                    </Description>
                </TextContent>
                <Image src={Image}>
                    <ModalImage
                        small={image}
                        medium={image}
                        imageBackgroundColor="#ffff"
                    />
                </Image>
            </TopContainer>            
            <Content>

                <SecondTitle>Flow complexities</SecondTitle>

            
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