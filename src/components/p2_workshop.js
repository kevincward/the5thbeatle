import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";

import Personas from '../images/p2_personas.png';



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
    font-size: 34px;
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
`
const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`



const Workshop = React.memo(({image,}) => {  

    return (
        <Container>
            <Title>
            Time for a workshop
            </Title>
            <Description>
                <p>
                  Since this feature would have a big impact on how the tCheck device is used, I wanted to share wireframes of the testing flow I had 
                  put together with engineering with sales, marketing, the customer service lead, CEO, COO, and engineering. The best way to do that 
                  would be to facilitate workshop where all the stakeholders could see the wireframes and provide feedback on the flow to be discussed in a group setting.
                </p>
                <p>
                  To prepare for the workshop, I wanted to make sure to document who we are building this feature for. Bearing in mind our customer base and discussions with 
                  tCheck users, this feature will be designed for professional ediblemakers (creating multiple batches of edibles to sell) and home ediblemakers (baking small 
                  batches of edibles for recreational or medicinal use). I compiled data for personas from past customer surveys we had ran, customer service tickets, and 
                  interviews with ediblemakers I had done.     
                </p>  
            </Description>
            <br />
            <Image>
            <ModalImage
                small={Personas}
                medium={Personas}
                imageBackgroundColor="#ffff"
            />
        </Image>
                
            
        </Container>
    )
})

export default Workshop