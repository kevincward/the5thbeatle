import React from "react"
import styled from "styled-components"
import { Header6, Body } from '../layouts/typography'

import plant from '../images/ic_cannawant_plant.svg'
import cost from '../images/ic_cannawant_cost.svg'
import shop from '../images/ic_cannawant_shop.svg'

const Container = styled.div`
    display: flex;
    margin: 60px 90px;
    flex-direction: column;

    @media (max-width: 768px) {
        margin: 60px 24px 0px;
    }

    @media (max-width: 500px) {
        margin: 60px 24px -25px;
    }
`

const ValuePropsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  width: 1000px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    padding: 50px 0 0px;
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 40px 0 0px;
  }
`

const Title = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 0px;
    }

    @media (max-width: 500px) {
        margin-bottom: 10px;
    }

`

const Description = styled(Body)`    
    color: rgba(0, 0, 0, 0.7);
    margin-top: 20px;
    margin-bottom: 0px;
    width: 1000px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Blurb = styled(Body)`    
    color: rgba(0, 0, 0, 0.7);
    margin-top: 20px;
    margin-bottom: 0px;
`

const ValueProp = styled.div`
  text-align: center;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 200px;
    }
  
  @media (max-width: 500px) {
    margin-bottom: 30px;
    width: 280px;
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
        We knew early on that users wanted to test their cannabis plant based infusions. By using multiple sources of customer feedback
        (i.e. surveys, customer service tickets, discussions with customers at trade shows) we learned that ediblemakers primarily 
        use plant based infusions because:
      </Description>
      <ValuePropsContainer>
        <ValueProp>
            <ValuePropImg src={plant} />
            <Blurb>
                They can grow the cannabis plant themselves
            </Blurb>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={cost} />
            <Blurb>
                It’s much more cost effective than concentrate
            </Blurb>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={shop} />
            <Blurb>
            May not have access to places that sell concentrate (dispensary)
            </Blurb>
        </ValueProp>
      </ValuePropsContainer>
    </Container>
  )
})

export default Userwants
