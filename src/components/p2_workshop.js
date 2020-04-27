import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import { Header5, Header6, Lead, Body } from '../layouts/typography'

import Personas from '../images/p2_personas.png';
import Group from '../images/p2_workshop_group.png';


const Container = styled.div`
    display: flex;
    margin: 90px 90px 0px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 60px 24px 40px;
    }

    @media (max-width: 500px) {
        margin: 50px 24px 40px;
    }

`

const Title = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 18px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-top: -10px;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 0px;

    @media (max-width: 768px) {
        margin: -10px 0 0px;
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
        margin: 0px;
    }
    
    .__react_modal_image__modal_container {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    margin-top: 80px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 16px;
        margin-top: 60px;
    }
`

const Title2 = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 0px;

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
                Considering all the complexities related to this flow, I wanted to get feedback on the testing process from key stakeholders across the company. 
                To do this, I facilitated a workshop which included representatives from engineering, sales, marketing, customer service, as well as the CEO and COO.
                </p>
                <p>
                To prepare for the workshop, I compiled our internal data on ediblemakers to create two personas. The first persona was a professional ediblemaker 
                (creating multiple batches of edibles to sell) and the second was a home ediblemaker (baking small batches of edibles for recreational or medicinal 
                use). These personas ensured that the team would have a clear and shared understanding of who we were building this feature for.
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

            <TitleContainer>
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
        </Container>
    )
})

export default Workshop