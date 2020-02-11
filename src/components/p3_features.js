import React from 'react'
import styled from 'styled-components'
import './Card.css'

import p3_img1 from '../images/p3_feature1.png';
import p1_img2 from '../images/p1_feature2.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto 350px;
    padding: 32px;
    @media (max-width: 768px) {
        margin: 60px auto 0px;
        padding: 32px 0px;
    }
` 

const Content = styled.div`
    height: 1100px;
    width: auto;
    border-radius: 10px;
    background-color: #f8f8f8;
    padding: 64px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    @media (max-width: 768px) {
        padding: 32px 23px;
        width: auto;        
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
    line-height: 1.25;
    letter-spacing: -0.47px;
    color: #000000;
    margin-bottom: 12px;
    @media (max-width: 768px) {
        font-size: 17px;
    }
` 

const Description = styled.div`    
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0,0,0,0.7);
    @media (max-width: 768px) {
        font-size: 15px;
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

const Img = styled.img`
    width: 600px;
    height: 100%;
    @media (max-width: 768px) {
        height: 260px;
    }
`

const ImgContainer = styled.div`
    width: 55%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
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
    margin: -200px auto;
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
    line-height: 1.18;
    letter-spacing: -0.5px;
    text-align: left;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: auto;
        font-size: 24px;
        margin-bottom: 16px;
    }
` 

const ExpDescription = styled.div`    
    font-size: 16px;
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
                <Img src={img}/>
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
        title: "Search, for all kinds of donors",
        description: "A sticky search bar at the top for users who know what they are looking for \
            Nearby charities list for new donors looking for local giving options \n \
            Dynamic featured list for donors looking for a familiar charity",
        img: p3_img1
    },
    {
        title: "Individual charity pages",
        description: "Each page features the charity’s logo and location\
            for easy recognition, impact  statement to drive \
            emotional appeal, and EIN number to prove the \
            charity’s legitimacy.",
        img: p3_img1
    },
    
]

const P1Features = props => (
    <Container>
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
                The Results
            </ExpTitle>
            <ExpDescription>
                We launched the feature and saw slow adoption. We reviewed the analytics on weekly basis to monitor for where 
                dropoff occurred and began speculating how to make improvements. As Giving Tuesday drew near, we partnered with
                the marketing team to bring awareness to donating with the PayPal app. The marketing effort brought 
            </ExpDescription>
        </Experience>
    </Container>
)

export default P1Features