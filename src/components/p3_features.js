import React from 'react'
import styled from 'styled-components'
import './Card.css'
import ModalImage from "react-modal-image"

import p3_img1 from '../images/p3_feature1.png';
import p3_img2 from '../images/p3_feature2.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto 350px;
    padding: 32px;
    
    @media (max-width: 768px) {
        margin: 30px auto 0px;
        padding: 32px 0px;
    }
` 

const Content = styled.div`
    height: 1000px;
    width: auto;
    border-radius: 10px;
    background-color: #f8f8f8;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    
    @media (max-width: 768px) {
        padding: 32px 23px;
        width: auto;
        margin-bottom: 300px;
        height: 880px;        
    }
` 

const OverViewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        flex-direction: column;        
    }
` 

const Title = styled.div`    
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 26px;
    letter-spacing: -0.47px;
    color: #000000;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
    }
` 

const Description = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0,0,0,0.7);
    
    @media (max-width: 768px) {
        
    }    
` 

const Header = styled.div`
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #000000;
    margin-bottom: 34px;
    text-align: center;
    
    @media (max-width: 720px) {
        margin-bottom: 16px;
        line-height: 1.33;
        letter-spacing: normal;
    }
`

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 74px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 32px;
    }
` 

const FeatureContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    justify-content: center;
    
    @media (max-width: 768px) {        
        width: 100%;
        justify-content: flex-start;
        margin-top: 32px;
    }
` 

const ImgContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    height: 433px;

    @media (max-width: 768px) {
        width: 100%;
        height: 260px;
    }

    .__react_modal_img__modal_container {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const Experience = styled.div`
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;    
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -300px auto;
    
    @media (max-width: 768px) {
        margin-top: -350px;
        padding: 24px 16px;
    }
` 

const ExpTitle = styled.div`    
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: -0.5px;
    text-align: left;
    color: #000000;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
        width: auto;
        margin-bottom: 16px;
    }
` 

const ExpDescription = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
`

const FeaturesContainer = ({title, description, img}) => {
    return (
        <FeatureContainer>
            <ImgContainer>
                <ModalImage
                    small={img}
                    medium={img}
                    imageBackgroundColor="#ffff"
                />
            </ImgContainer>
            <FeatureContent>
                <Title>{title}</Title>                
                <Description>{description}</Description>
            </FeatureContent>            
        </FeatureContainer>
    )
}

const features = [
    {
        title: "Everyone can provide relief in a timely manner",
        description: "Users are immediately alerted with an opportunity to help those in crisis. They don't need worry about which charity is providing support or that their financial information will become compromised.",
        img: p3_img1
    },
    {
        title: "A helpful reminder",
        description: "Donating is generally not top of mind. A subtle donate suggestion for a charity persoanlized to the user. A quick opportunity to feel good.",
        img: p3_img2
    },
]

const P3Features = props => (
    <Container>
        <Header>
            Key experience features
        </Header>
        <Content>
            <OverViewContainer>
                {
                    features.map((feature, index) => {
                        return (
                            <FeaturesContainer 
                               key={index}
                               title={feature.title}
                               description={feature.description}
                               img={feature.img}
                            />
                        )
                    })
                }
            </OverViewContainer>            
        </Content>
        <Experience>
            <ExpTitle>
                Here were the results
            </ExpTitle>
            <ExpDescription>
                The disaster relief notification went to use right away, driving PayPal to support Hurricane Florence, Hurricane Dorian, Californai wildfire, and even the US Government shutdown relief efforts. The 'donate again' action tile was initially released to 10 miliion users in its first month, and then another 25 million users after that.    
            </ExpDescription>
            <br />
            <br />
            <ExpTitle>
                Traffic to PayPal fundraisers and charity pages tripled
            </ExpTitle>
            <ExpDescription>
                These triggers succeeded in tripling the number of users to the disaster relief fundraising pages and the charity pages promoted on the user dashboard tile.
            </ExpDescription>
        </Experience>
    </Container>
)

export default P3Features