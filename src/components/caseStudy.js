import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./arrowBtn.scss"

const SectionGroup = styled.div `
    background: #FFFFFF;    
    background-size: cover;
    top: -100px; 
    position: relative;
    z-index: 0;
    margin-top: -250px;
    
    @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    margin-top: -80px;
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
    -webkit-font-smoothing: antialiased;
    font-size: 34px;
    line-height: 1.2;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    
    @media (max-width: 720px) {
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
        overflow: hidden;
        padding: 50px 10px;
    }
    
    @media (max-width: 720px) {
        .slick-list {
            overflow: visible;
        }
        z-index: 1;
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
        title: "Improving the mobile donation experience",
        text: "PayPal",
        link: "View Project",
        url: "/project1"
    },
    {
        title: "Complex measuring made easy",
        text: "Engineered Medical Technologies",
        link: "View Project",
        url: "/project2"
    },
    {
        title: "How to remind (not nag) people to donate",
        text: "PayPal",
        link: "View Project",
        url: "/project3"
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
        variableWidth: true,

        responsive: [{
            breakpoint: 600,
            settings: {
              initialSlide: -3
            }
          }]
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