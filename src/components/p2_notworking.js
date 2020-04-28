import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import { Header6, Body } from '../layouts/typography'
 
import NotWorking from '../images/p2_workshop4.jpg';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 90px 0px;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    
    @media (max-width: 768px) {
        margin: 0px auto 40px;
        width: 100%;
    }

    @media (max-width: 500px) {
        margin: 0px 24px 40px;
        width: 100%;
    }
` 

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    @media (max-width: 768px) { 
        width: 94%;
        padding: 0px 40px;
    }

    @media (max-width: 500px) {
        margin: 0px;
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
        margin-top: 0px;  
    }

    @media (max-width: 500px) {
        margin-top: 0px;  
    }
` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;

    @media (max-width: 768px) {
        margin: 20px 0px 0px;
        order:1;
        width: 100%
    }

    @media (max-width: 500px) {
        margin: 0px;
    }
` 

const Title = styled(Header6)`    
    margin-top: 50px;
    margin-bottom: 10px;
    width: 1000px;
    
    @media (max-width: 768px) {
        margin-top: 20px;
        margin-bottom: -20px;
        width: 100%;
    }

` 

const Description = styled(Body)`
    color: rgba(0,0,0,0.7);

    @media (max-width: 500px) {
        margin-top: 32px;
    }
`

const Image = styled.div`
    width: 500px;
    display: flex;  
    padding-left: 40px;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        margin: 10px 0px 20px;
        padding-left: 0px;
        width: 100%;
        order:2;
    }



    .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
    }
`

const Notworking = React.memo(() => {
    return (
        <Container>
            <Content>
                <Title>This isn't working</Title>
                <OverViewContainer>
                    <OverViewContent>
                        <Description>
                        <p>
                        I walked through the flow reading all the post it notes aloud to facilitate to discussion. As we made our way through the comments, it became clear 
                        that the strain mapping flow needed a lot of simplification.
                        </p>
                        <p>
                        I started reinterpretting the flow with input from everyone in the room. Instead of asking users to create two plant infusions (one at 2 mins, the 
                        other at 5 mins) and testing them upon collection, we determined we could have the user make one plant infusion, and then draw a sample with a 
                        syringe at 2 mins and then a sample with another syringe at 5 mins. At that point, they can test the samples without worrying about a time limit.
                        </p>
                        </Description>
                    </OverViewContent>
                    <Image src={NotWorking}>
                    <ModalImage
                        small={NotWorking}
                        medium={NotWorking}
                        imageBackgroundColor="#ffff"
                    />
                    </Image>    
                </OverViewContainer>            
            </Content>
        </Container>
    )
})

export default Notworking
