import React from "react"
import styled from "styled-components"


const HeroBackground = styled.div`
  background: url(${({ heroImgURL }) => heroImgURL});
  height: 28rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: white;
  padding-top: 4.5rem;

  @media (max-width: 768px) {
    height: 24rem;
  }
`

const ContentContainer = styled.div`
  margin: 0 0 0 6.5rem;
  

  @media (max-width: 768 px) {
    margin: 0 0 0 2rem;
  }

`

const Experience = styled.div`
    width: 30%;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin-top: 60px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 0px;
        padding: 24px 16px;
    }
` 

const Title = styled.div`
    font-family: Inter;
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
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
    width: 300px;
`

const Solution = React.memo(
  ({ heroImgURL, title, description }) => {
    return (
      <HeroBackground heroImgURL={heroImgURL}>
        <ContentContainer id="Solution">>
            <Experience>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Experience>
        </ContentContainer>
      </HeroBackground>
    )
  }
)

export default Solution
