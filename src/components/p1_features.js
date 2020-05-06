import React from 'react'
import styled from 'styled-components'
import { Lead, Body } from '../layouts/typography'
import ModalImage from "react-modal-image"

import p1_img1 from '../images/p1_feature1.png';
import p1_img2 from '../images/p1_feature2.png';
import p1_img3 from '../images/p1_feature3.png';
import p1_img4 from '../images/p1_feature4.png';


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

const P1Features1 = () => {    

    return (
        <Container>
            <Content>
                <Items>
                    <Item1 
                        title='Search, for all kinds of donors'
                        description='A sticky search bar at the top for users who know what they are looking for.
                        A nearby charities list for new donors looking for local giving options.
                        Dynamic featured list for donors looking for a familiar charity.'
                        img={p1_img1}                   
                    />
                    <br />
                    <Item2 
                        title='Individual charity pages'
                        description='Each page features the charity’s logo and location
                        for easy recognition, an impact  statement to drive
                        emotional appeal, and EIN number to prove the
                        charity’s legitimacy.'
                        img={p1_img2} 
                    /> 
                    <br />
                    <Item1 
                        title='Adjustable anonymity'
                        description='Leveraging the existing amount selection app pattern, I added a share personal information opt-out, giving the user more control of their privacy.'
                        img={p1_img3}                   
                    />
                    <br />
                    <Item2 
                        title='Sharing the charity you support'
                        description='Building on the confirmation screen app pattern, I added a native share option so the user could share their cause to the platform of their choice. The share message autopopulates with the charity’s name and a link to their charity profile.'
                        img={p1_img4} 
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default P1Features1