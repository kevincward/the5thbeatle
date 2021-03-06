import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

import tcheckImage1 from '../images/Exp_1.png'
import tcheckImage2 from '../images/Exp_2.png'
import tcheckImage3 from '../images/Exp_3.png'
import tcheck from '../images/ic_timeline_tch.svg'
import paypal from '../images/ic_timeline_pp.svg'
import zipkick from '../images/ic_timeline_zp.svg'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 90px;
    @media (max-width: 768px) {
        margin: 30px 24px;
    }
`

const Title = styled.div`
    width: 450px;    
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 40px;
    letter-spacing: normal;
    color: #000000;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 45%;
    margin-right: 10%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

const SliderContainer = styled.div`
    width: 45%;
    height: fit-content;
    @media (max-width: 768px) {
        width: 100%;
        margin: 32px 0px;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

const ImgIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-top: 12px;
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
    line-height: 26px;
    letter-spacing: normal;
    color: #000000;
`


const ItemRole = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
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


const Item = ({icon, title, role, description}) => {
    return (
        <ItemContainer>
            <ImgIcon src={icon} />
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemRole>{role}</ItemRole>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <SliderContainer>
            <Slider {...settings}>
                <Img src={tcheckImage1} />
                <Img src={tcheckImage2} />
                <Img src={tcheckImage3} />
            </Slider>
        </SliderContainer>
    )
}

const Experience = () => {    

    return (
        <Container>
            <Title>
                I've worked on corporate and 
                startup products
            </Title>
            <Content>
                {typeof window !== 'undefined'? (window.matchMedia('(max-width: 768px)').matches ? 
                 <Sliders />
                 : null):null}
                <Items>
                    <Item 
                        icon={tcheck}
                        title='Engineered Medical Technologies'
                        role='Director of UX'
                        description='Lead the design of tCheck’s brand, flagship product, native application, and e-commerce platform.'
                    />
                    <Item 
                        icon={paypal}
                        title='PayPal'
                        role='Senior UX Designer'
                        description='I redesigned the native onboarding process and then designed tools for donors, charities, and partners.'
                    /> 
                    <Item 
                        icon={zipkick}
                        title='Zipkick'
                        role='UX Designer'
                        description='Designed a personalized hotel recommendation app and website.'
                    /> 
                </Items>
                {typeof window !== 'undefined'?(!window.matchMedia('(max-width: 768px)').matches ? <Sliders /> : null):null}
            </Content>
        </Container>
    )
}
export default Experience