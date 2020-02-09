import React from 'react'
import styled from 'styled-components'
import ModalImage from "react-modal-image";


const Container = styled.div`
    display: flex;
    margin: 80px 90px 0px;
    flex-direction: column;
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
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
`

const MoreDescription = styled.div`    
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
`


const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
const Image2 = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding-top: 100px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
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