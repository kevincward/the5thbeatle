
import React from 'react'
import styled from 'styled-components'
import { Header6, Body } from '../layouts/typography'
import ModalImage from "react-modal-image";


const Container = styled.div`
    display: flex;
    margin: 50px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 40px 24px 0px;
    }

    @media (max-width: 500px) {
        margin: 40px 24px 0px;
    }
`

const Title = styled(Header6)`  
    color: #000000;
    width: 500px;
    margin-top: 50px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    width: 500px;
    margin-top: 0px;

    @media (max-width: 768px) {
       width: 100%; 
        margin-bottom: 25px;
    }

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`

const Content = styled.div`
    display: flex;
    font-size: 32px;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin-left: 20px;
  margin-right: auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    align-content: center; 
    width: 100%;
    margin: 20px 0px 0px;
    }

  @media (max-width: 500px) {
    margin: -10px 0px 0px;
    }

  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`


const Tiles = React.memo(({ title, description, image}) => {
    return (
        <Container>            
            <Content>
                <TextContainer>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </TextContainer>
        
                <Image>
                    <ModalImage
                small={image}
                medium={image}
                imageBackgroundColor="#ffff"
                    />
                </Image>
            </Content>
        </Container>
    )
})

export default Tiles