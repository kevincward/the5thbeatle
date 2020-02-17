import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";

const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 80px 24px 0px;
    }
`

const Title = styled.div`
    width: 565px;    
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    width: 80%;
    color: #000000;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
        margin: 40px 24px 0px;
    }
`
const Description = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    width: 400px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        width: 280px;
        margin: 40px 24px;
    }

`
const Description2 = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    width: 400px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        width: 280px;
        margin: 10px 24px;
    }
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
  height: 100%;
  max-width: 500px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    min-width: 200px;
    margin-top: -50px;  
    }
  
  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin: 10px 24px 0px;  
    }

`

const TwoColumnBlurb = React.memo(({ title, description, description2, image}) => {
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
                    <Description2>
                        {description2}
                    </Description2>
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