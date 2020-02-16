import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";

import Personas from '../images/p2_personas.png';
import hardhat from '../images/ic_hardhat.svg';
import Group from '../images/p2_workshop_group.png';
import NotWorking from '../images/p2_workshop4.jpg';


const Container = styled.div`
    display: flex;
    margin: 30px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 30px 24px 60px;
    }
`

const Title = styled.div`
    width: 565px;    
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
        margin-bottom: 18px;
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

    font-size: 28px;
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
    margin: 30px 24px 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: -10px 24px 0px;
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
                Since this feature would have a significant impact on how the tCheck device was used, I wanted to get feedback on my wireframes from key stakeholders across
                 the company. To do this, I facilitated a workshop which included representatives from engineering, sales, marketing, customer service, as well as the CEO and COO. 
                </p>
                <p>
                To prepare for the workshop, I compiled all of our internal data on ediblemakers (including past research and customer service tickets) to create two personas. 
                The first persona was a professional ediblemaker (creating multiple batches of edibles to sell) and the second was a home ediblemaker (baking small batches of 
                edibles for recreational or medicinal use). These personas ensured that the team would have a clear and shared understanding of who we were building this feature for.      
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
                        This wasn’t working…
                    </Title>
                    <Description>
                        <p>
                            I walked through the flow reading all the post it notes aloud to faciliatate to discussion. As we made our way through the comments, it became clear that the strain mapping 
                            flow needed a lot of simplification.
                        </p>
                        <p>
                            I started reinterpretting the flow with input from everyone in the room. Instead of asking users to create two plant infusions (one at 2 mins, the other at 5 mins) and testing 
                            them upon collection, we determined we could have the user make one plant infusion, and then draw a sample with a syringe at 2 mins and then a sample with another syringe at 5 mins. 
                            At that point, they can test the samples without worrying about a time limit. 
                        </p>
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