import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import { Header6, Body } from '../layouts/typography'
 

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 90px 0px;
    align-items: center;
    flex-direction: column;

    
    @media (max-width: 768px) {
        margin: 0px auto 40px;
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
        width: 100%;
        padding: 0px 0px;
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

` 

const OverViewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


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
    width: 60%;
    
    @media (max-width: 768px) {
        margin-top: 20px;
        margin-bottom: -20px;
        width: 100%;
    }

` 

const Description = styled(Body)`
    color: rgba(0,0,0,0.7);

    @media (max-width: 768px) {
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
        width: 80%;
        order:2;       
    }


    .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
    }
`

const TwoColumnBlurb = React.memo(({ title, description, description2, image}) => {
    return (
        <Container>            
            <Content>
                <OverViewContainer>
                    <OverViewContent>
                        <Title>
                            {title}
                        </Title>
                        <Description>
                            {description}
                        </Description>
                    </OverViewContent>
                <Image>
                    <ModalImage
                    small={image}
                    medium={image}
                    imageBackgroundColor="#ffff"
                    />
                 </Image>
                 </OverViewContainer>            
            </Content>
        </Container>
    )
})

export default TwoColumnBlurb