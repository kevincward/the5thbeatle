import React from 'react'
import styled from 'styled-components'
import eCommerce from '../images/ic_other_ecom.svg'
import animations from '../images/ic_other_anim.svg'
import emojis from '../images/ic_other_emoj.svg'
import icons from '../images/ic_other_icons.svg'
import illustrations from '../images/ic_other_illus.svg'
import pack from '../images/ic_other_pack.svg'
import { sizes } from "../layouts/Layout"
import { Link } from 'gatsby'

const Container = styled.div`
  margin: 44px 0px;
  padding: 44px 0px;
  background-color: #f8f8f8;
  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {    
    padding: 32px 1rem 0;
  }
`

const Title = styled.div`    
    height: 40px;
    font-family: Inter;
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
        font-size: 32px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 32px 0px 16px;
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    width: 349px;    
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin: 16px;
    padding: 16px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
    @media (max-width: 768px) {
        margin: 0px;
        width: 100%;        
    }
`

const ImgIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
`

const ItemTitle = styled.div`
    object-fit: contain;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #333333;
    margin-bottom: 16px;
`

const ItemView = styled.div`
    font-family: Inter;
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -0.1px;
    color: #1a1a1a;
    margin-top: 16px;
`

const ItemContent = styled.div`
    
`

const HorizontalLine = styled.div`
    width: 80px;
    border: solid 1px #f7991e;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const LinkContainer = styled(Link)`
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 16px;
    }
`

const Item = ({icon, title, url}) => {
    return (
        <LinkContainer to={`/` + url}>
            <ItemContainer>
                <ImgIcon src={icon} />
                <ItemTitle>{title}</ItemTitle>
                <HorizontalLine />
                <ItemView>View ➡️</ItemView>
            </ItemContainer>
        </LinkContainer>
    )
}

const otherWork = props => {

    return (
        <Container>            
            <Title>Others Projects</Title>
            <Content>
                <Row>
                    <Item 
                        icon={eCommerce}
                        title="eCommerce Site"
                        url="blank"
                    />
                    <Item 
                        icon={animations}
                        title="Animations"
                        url="blank"
                    />
                </Row>
                <Row>
                    <Item 
                        icon={icons}
                        title="Icons"
                        url="blank"
                    />
                    <Item 
                        icon={illustrations}
                        title="Illustrations"
                        url="blank"
                    />
                </Row>
                <Row>
                    <Item 
                        icon={emojis}
                        title="Emojis"
                        url="blank"
                    />
                    <Item 
                        icon={pack}
                        title="Package Design"
                        url="blank"
                    />
                </Row>
            </Content>
        </Container>
    )
}

export default otherWork