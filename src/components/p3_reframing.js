import React from 'react'
import styled from 'styled-components'
import { Header6, Body } from '../layouts/typography'
import ModalImage from "react-modal-image";

import image from '../images/p3_pattern_remind.png';

const Container = styled.div`
    display: flex;
    margin: 50px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 50px 24px -30px;
    }
`

const Title = styled(Header6)`  
    color: #000000;
    width: 1000px;
    margin-top: 50px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        margin-top: 60px;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 0px;

    @media (max-width: 768px) {
        margin-bottom: 25px;
    }

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`

const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    align-content: center; 
    width: 110%;
    margin: 20px 0px 0px;
    }

  @media (max-width: 500px) {
    margin: -10px 0px 0px;
    }

  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const Reframing = () => {    

    return (
        <Container>
            <Image>
            <ModalImage
                small={image}
                medium={image}
                imageBackgroundColor="#ffff"
            />
            </Image>
            
            <Title>
                Reframing the challenge with insights
            </Title>
            <Description>
                <p>
                 My PM and I chose to focus on designing a trigger for each of these two donor behaviors. I framed the questions:
                </p>
                <p>
                1. How might we design a donation trigger for a user who donates impulsively?
                </p>
                <p>
                2. How might we design a donation trigger for a user who makes consistent, deliberate donations?
                </p>
            </Description>
        </Container>
    )
}
export default Reframing