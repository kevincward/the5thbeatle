import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image"

import time from '../images/ic_canna_time.svg'
import acc from '../images/ic_canna_acc.svg'
import twopart from '../images/ic_canna_twopart.svg'
import wall from '../images/ic_wall.svg'
import image from '../images/p2_firstpass.jpg'

const Container = styled.div`
    display: flex;
    margin: 100px 90px 10px;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 60px 24px 0px;
    }
`

const Title = styled.div`    
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
        margin-bottom: 16px;
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
    
    @media (max-width: 768px) {
        margin-bottom: 32px;
    }    
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
   
    @media (max-width: 768px) {
        margin-right: 14px;
    }
`

const ItemTitle = styled.div`
    object-fit: contain;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 28px;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 10px;
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

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 359px;
    
    @media (max-width: 768px) {
        width: 100%;        
    }
`

const Image = styled.div`
    width: 50%;
    height: auto;
    margin-left: 90px;
   
    @media (max-width: 768px) {
        width: 100%;
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
                        First pass at the flow with the Engineering team
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