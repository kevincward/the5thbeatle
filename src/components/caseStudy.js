import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    .slick-list {
        overflow: visible;
    }
    .slick-track {
        display: flex;
    }
    position: relative;
    top: 200px;
    margin-left: auto;
    width: 62%;
    border-radius: 8px;
`

const ArrowButton = () => {
    return (
        <section class="centered-container">
            <a class="link link--arrowed" href="#">                
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g fill="none" stroke="#2175FF" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12">
                        </circle>
                        <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98">
                        </path>
                    </g>
                </svg>
            </a>
        </section>
    )
}

const caseStudy = props => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "slider variable-width",
        variableWidth: true
      };

    return (
        <SectionGroup>
            <CardCarousel>                
                <Slider {...settings}>
                    <Card
                        title="Designing a mobile giving experience for all"
                        text="PayPal" 
                        link="Learn More"
                        url="project1"
                    />
                    <Card
                        title="Measurement tools built for all skill levels"
                        text="tCheck" 
                        link="Learn More" 
                        url="blank"
                    />
                    <Card
                        title="Designing a mobile giving experience for all"
                        text="PayPal" 
                        link="Learn More" 
                        url="blank"
                    />
                    <Card
                        title="Designing a mobile giving experience for all"
                        text="PayPal" 
                        link="Learn More" 
                        url="blank"
                    />
                </Slider>
            </CardCarousel>
            {/* <ArrowButton /> */}
            <Colorblock>
                <SectionTitleGroup>
                    <SectionTitle>{props.title}</SectionTitle>
                </SectionTitleGroup>  
            </Colorblock>            
        </SectionGroup>
    )
}
export default caseStudy