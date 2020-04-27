import React from 'react'
import styled from 'styled-components'
import { Lead, Body } from '../layouts/typography'
import ModalImage from "react-modal-image"

import p2_img1 from '../images/p2_feature1.png';
import p2_img2 from '../images/p2_feature2.png';
import p2_img3 from '../images/p2_feature3.png';
import p2_img4 from '../images/p2_feature4.png';


const Container = styled.div`
    display: flex;
    margin: 40px 90px -40px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 50px 24px -15px;
    }

    @media (max-width: 500px) {
        margin: 50px 24px -30px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 100%;
    margin-right: 10%;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 12px;
    width: 1000px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%; 
        }

`

const ItemTitle = styled(Lead)`
    margin-top: 0px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
            padding-top: 20px;
        }

    @media (max-width: 500px) {
            padding-top: 30px;
        }
`

const ItemDescription = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0px;
    margin-bottom: 0px;

    
`

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    
    @media (max-width: 768px) {
        order:2;
        width: 100%;
        
    }
`

const ImgContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center; 

    @media (max-width: 768px) {
        width: 30%;
    }

    @media (max-width: 500px) {
        order:1;
        width: 100%;
    }

    .__react_modal_img__modal_container {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const Item1 = ({img, title, description}) => {
    return (
        <ItemContainer>
             <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
             </ItemContent>
             <ImgContainer>
                <ModalImage
                    small={img}
                    medium={img}
                    imageBackgroundColor="#ffff"
                />                
            </ImgContainer>   
        </ItemContainer>
    )
}

const Item2 = ({img, title, description}) => {
    return (
        <ItemContainer>
             <ImgContainer>
                <ModalImage
                    small={img}
                    medium={img}
                    imageBackgroundColor="#ffff"
                />                
            </ImgContainer>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const P2Features = () => {    

    return (
        <Container>
            <Content>
                <Items>
                    <Item1 
                        title='Test Preparation'
                        description='Users should have a sense of the time and procedure required from the start. The first screen users see gives them an option to watch a video tutorial of the testing process, what supplies they will need, and an overview of the steps that will be required.'
                        img={p2_img1}                   
                    />
                    <br />
                    <Item2 
                        title='Step by step instruction with visuals'
                        description='To help the user keep track of where they are and what their set up should look like, a bulleted list and animated gif of the step appears at each step.'
                        img={p2_img2} 
                    /> 
                    <br />
                    <Item1 
                        title='Timers to keep track of infusion process'
                        description='A simple timer paired with a fun task animation reduce the stress of the timed experience.'
                        img={p2_img3}                   
                    />
                    <br />
                    <Item2 
                        title='Step by step instruction with visuals'
                        description='Rather than associating a map with a date or value, the user can name the strain however they want so they can find it easily when testing.'
                        img={p2_img4} 
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default P2Features