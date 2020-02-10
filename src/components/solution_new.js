import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 90px;
    @media (max-width: 768px) {
        margin: 60px 24px;
    }
`

const Title = styled.div`
    width: 565px;    
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    width: 80%;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 24px;
    }
`
const Description = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    width: 80%;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
`

const Content = styled.div`
    display: flex;
    font-size: 32px;
    flex-direction: row;
    padding: 0px 0px;
    justify-content: center;
    align-items: center; 
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Image = styled.div`
  display: block;
  height: auto;
  max-width: 500px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  
  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TwoColumnBlurb = React.memo(({ title, description, image}) => {
    return (
        <Container>            
            <Content>
                {typeof window !== 'undefined'? (window.matchMedia('(max-width: 768px)').matches ? 
                 
                 <Image>
                 <ModalImage
                    small={image}
                    medium={image}
                    imageBackgroundColor="#ffff"
                 />
                 </Image>
                 : null):null}
                <TextContainer>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </TextContainer>
                {typeof window !== 'undefined'?(!window.matchMedia('(max-width: 768px)').matches ? 
                <Image>
                    <ModalImage
                small={image}
                medium={image}
                imageBackgroundColor="#ffff"
                    />
                </Image> : null):null}
            </Content>
        </Container>
    )
})

export default TwoColumnBlurb