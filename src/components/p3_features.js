import React from 'react'
import styled from 'styled-components'
import { Lead, Body } from '../layouts/typography'
import ModalImage from "react-modal-image"

import p1_img1 from '../images/remind_animate1.gif';
import p1_img2 from '../images/remind_animate2.gif';



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

const P3Features1 = () => {    

    return (
        <Container>
            <Content>
                <Items>
                    <Item1 
                        title='Everyone can provide relief in a timely manner'
                        description='Users are immediately alerted with an opportunity to help those in crisis. They do not need worry about which charity is providing support or that their financial information will become compromised.'
                        img={p1_img1}                   
                    />
                    <br />
                    <Item2 
                        title='A helpful reminder'
                        description='Donating is generally not top of mind. A subtle donate suggestion for a charity persoanlized to the user. A quick opportunity to feel good.'
                        img={p1_img2} 
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default P3Features1