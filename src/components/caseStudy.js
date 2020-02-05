import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./arrowBtn.scss"

const SectionGroup = styled.div `
    background: #FFFFFF;    
    background-size: cover;
    @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const Colorblock = styled.div`
    background: #540D6E;
    height: 150px;
    padding-top: 200px;
    padding: 3.5rem 5rem 3rem;
    align-items: center;
    display: flex;
`

const SectionTitleGroup = styled.div`
    margin: 0 40px;
    @media (max-width: 720px) {
        margin: 0 10px;
    }
`

const SectionTitle = styled.h3`
    margin: 0;
    color: #FFFFFF;
    font-family: Inter;
    -webkit-font-smoothing: antialiased;
    font-size: 34px;
    line-height: 1.2;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    
    @media (max-width: 640px) {
       font-size: 24px; 
       width: 50px;
       margin-left: -50px;
    }
`

const CardCarousel = styled.div` 
    .slick-slide {
        margin-right: 20px; 
    }
    .slick-track {
        display: flex;
    }
    .slick-list {
        overflow: hidden !important;
      }
      
    .slick-prev {
        display: none !important;
    }
    position: relative;
    top: 200px;
    margin-left: auto;
    width: 62%;
    border-radius: 8px;
`

const NextArrowButton = ({next}) => {
    return (
        <button class="learn-more" onClick={() => next()}>
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Next</span>
        </button>
    )
}
var slider;

const next = () => {    
    slider.slickNext();
}

const cards = [
    {
        title: "Designing a mobile giving experience for all",
        text: "PayPal",
        link: "Learn More",
        url: "project1"
    },
    {
        title: "Measurement tools built for all skill levels",
        text: "tCheck",
        link: "Learn More",
        url: "blank"
    },
    {
        title: "Designing a mobile giving experience for all",
        text: "PayPal",
        link: "Learn More",
        url: "blank"
    },
    {
        title: "Designing a mobile giving experience for all",
        text: "PayPal",
        link: "Learn More",
        url: "project1"
    },
    {
        title: "Measurement tools built for all skill levels",
        text: "tCheck",
        link: "Learn More",
        url: "blank"
    },
    {
        title: "Designing a mobile giving experience for all",
        text: "PayPal",
        link: "Learn More",
        url: "blank"
    },
    
]
const caseStudy = props => {    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "slider variable-width",
        variableWidth: true
      };

    return (
        <SectionGroup>
            <CardCarousel>                
                <Slider 
                    {...settings} 
                    ref={c => (slider = c)}
                >
                    {cards.map((card) => 
                        <Card
                            title={card.title}
                            text={card.text}
                            link={card.link}
                            url={card.url}
                        />
                    )}
                </Slider>
            </CardCarousel>
            <NextArrowButton 
                next={() => next()}
            />
            <Colorblock>
                <SectionTitleGroup>
                    <SectionTitle>{props.title}</SectionTitle>
                </SectionTitleGroup>  
            </Colorblock>            
        </SectionGroup>
    )
}
export default caseStudy