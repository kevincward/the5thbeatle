import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";
import { Header6, Body } from '../layouts/typography'


const Container = styled.div`
    display: flex;
    margin: 50px 90px 30px;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        margin: 60px 24px 20px;
    }

    @media (max-width: 500px) {
        margin: 60px 24px 40px;
    }
`

const Title = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 32px;

    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 30px;
    }
`

const Description = styled(Body)`    
    color: rgba(0, 0, 0, 0.7);
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
        width: 100%
    }
`

const MoreDescription = styled.div`    
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 10px;     
`


const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 30px auto;

  @media (max-width: 768px) {
    align-content: center; 
    width: 110%;
    margin: 20px 0px 0px;
    }

  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
const Image2 = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin: 30px auto 40px;

  @media (max-width: 768px) {
    align-content: center; 
    width: 110%;
    margin: 40px 0px 0px;
    }

  @media (max-width: 500px) {
    margin: 30px 0px -40px;
    }


  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const ContentBlurb = React.memo(({ title, description, moredescription, image, image2 }) => {
    return (
      <Container>
        <Title>
            {title}
        </Title>
        <Description>
            {description}
        </Description>
        <MoreDescription>
            {moredescription}
        </MoreDescription>
        {/* <Image src={image} />    */}
        <Image>
            <ModalImage
                small={image}
                medium={image}
                imageBackgroundColor="#ffff"
            />
        </Image>
        <Image2>
            <ModalImage
                small={image2}
                medium={image2}
                imageBackgroundColor="#ffff"
            />
        </Image2>
       
      </Container>
    )
  })


export default ContentBlurb