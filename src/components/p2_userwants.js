import React from "react"
import styled from "styled-components"

import plant from '../images/ic_cannawant_plant.svg'
import cost from '../images/ic_cannawant_cost.svg'
import shop from '../images/ic_cannawant_shop.svg'

const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 60px 24px;
    }
`

const ValuePropsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 4.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
        font-size: 32px;
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
    margin-bottom: 8px;
    margin-top: 12px;
`


const ValueProp = styled.div`
  text-align: center;
  width: 15.6rem;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ValuePropImg = styled.img`
  width: 64px;
  height: 64px;
`


const Userwants = React.memo(() => {
  return (
    
    <Container>
      <Title>Users want to test their plant based infusions</Title>
      <Description>
        We knew early on that users wanted to test their cannabis plant based infusions. Speaking to customers at events, 
        reviewing custoemr service tickets, and survey data, these are a couple of the main reasons ediblemakers primarily 
        use plant based infusions:
      </Description>
      <ValuePropsContainer>
        <ValueProp>
            <ValuePropImg src={plant} />
            <Description>
                They can grow the cannabis plant themselves
            </Description>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={cost} />
            <Description>
                It’s much more cost effective than isolate
            </Description>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={shop} />
            <Description>
            May not have access to places that sell isolate (dispensary)
            </Description>
        </ValueProp>
      </ValuePropsContainer>
    </Container>
  )
})

export default Userwants
