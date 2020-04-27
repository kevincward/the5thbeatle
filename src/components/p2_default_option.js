import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import { Header6, Body } from '../layouts/typography'

import DefaultOption from '../images/p2_adddefault.png'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 90px 100px;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 0px 24px 0px;
    }
` 

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    @media (max-width: 768px) { 
        width: 100%;
    }

` 

const OverViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    margin-bottom: -10px;
    
    @media (max-width: 768px) {
        width: 100%; 
        flex-direction: column;  
    }

    @media (max-width: 400px) {
        flex-direction: column;
        margin-bottom: -20px;  
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;

    @media (max-width: 768px) {
        margin: 20px 0px 0px;
        width: 100%; 
        order:1;
    }
` 

const Title = styled(Header6)`    
    margin-top: 50px;
    margin-bottom: 10px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
` 

const Description = styled(Body)`
    color: rgba(0,0,0,0.7);
`

const Image = styled.div`
    width: 400px;
    display: flex;  
    padding-left: 40px;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        margin: 10px 0px 20px;
        padding-left: 0px;
        width: 50%;
        order:2;
    }
    @media (max-width: 500px) {
        margin: 10px 0px 20px;
        padding-left: 0px;
        width: 100%;
        order:2;
    }

    .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
    }
`

const DefaultOption1 = () => (
    <Container>
            <Content>
                <OverViewContainer>
                    <OverViewContent>
                        <Title>Ok, let's offer a default option</Title>
                        <Description>
                        I met with leadership and our engineering lead to debrief on this feedback. We agreed that we needed to account 
                        for users who wanted to run a plant based infusion potency test without mapping their strain.
                        <p>
                        Having run countless tests on several strain varieties we were confident 
                        that we could offer a default strain setting for users that would use the 
                        average of 12 different cannabis strains rather than their particular strain.
                        </p>
                        </Description>
                    </OverViewContent>
                    <Image src={DefaultOption}>
                    <ModalImage
                        small={DefaultOption}
                        medium={DefaultOption}
                        imageBackgroundColor="#ffff"
                    />
                    </Image> 
                </OverViewContainer>            
            </Content>
        </Container>
)

export default DefaultOption1