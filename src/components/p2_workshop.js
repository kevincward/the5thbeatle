import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";

import Personas from '../images/p2_personas.png';
import hardhat from '../images/ic_hardhat.svg';
import Group from '../images/p2_workshop_group.png';
import NotWorking from '../images/p2_workshop4.jpg';


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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 11px;
`

const Title2 = styled.div`

    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.55px;
    color: #000000;
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
    width: 310px;
    padding-right: 100px;
    @media (max-width: 768px) {
        width: 100%;        
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
            <br />
            <br />
            <TitleContainer>
            <Icon src={hardhat}/>
            <Title2>Workshop day</Title2>
            </TitleContainer>
            <Description>
                <p>
                Prior to the meeting, all stakeholders were provided:
                </p>
                <p>
                  1. Problem statement: As an ediblemaker, I want to test the potency of my cannabis plant infused oils so I know how it will impact my recipe    
                </p>  
                <p>
                  2. Personas   
                </p>  
                <p>
                  3. Brief synoposis of how feature would work from a technical standpoint   
                </p>
                <p>
                I hung the inital flow on the wall,  handed out post-it note pads, and gave stakeholders 15 mins to look over the flow and provide notes via post it notes on the flow.   
                </p>    
            </Description> 
            <br />
            <Image>
                <ModalImage
                    small={Group}
                    medium={Group}
                />
            </Image> 
            <br />
            <br />
            <br />
            <br />
            <TopContainer>
                <TextContent>
                    <Title>
                        This isn’t working…
                    </Title>
                    <Description>
                        Since every strain of cannabis is a little different, users would need to create a unique profile (also called a strain map) for the plant they are using. Once the strain map has been created, the user would need to select it when testing their infusion so tCheck accounts for its characteristics. 
                    </Description>
                    <br />
                </TextContent>
                
                <Image>
                <ModalImage
                    small={NotWorking}
                    medium={NotWorking}
                    imageBackgroundColor="#ffff"
                />
                </Image>
            </TopContainer>            
            
            
        </Container>
    )
})

export default Workshop