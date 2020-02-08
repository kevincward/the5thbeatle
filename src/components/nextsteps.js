import React from "react"
import styled from "styled-components"

import personalize from '../images/ic_donatestep_pers.svg'
import entrypoint from '../images/ic_donatestep_entr.svg'
import suggest from '../images/ic_donatestep_sugg.svg'

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


const NextSteps = React.memo(() => {
  return (
    
    <Container>
      <Title>Next Steps</Title>
      <ValuePropsContainer>
        <ValueProp>
            <ValuePropImg src={personalize} />
            <Description>
                Personalize charity discovery and donation experience
            </Description>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={entrypoint} />
            <Description>
                Increase entry points to donate feature where relevant
            </Description>
        </ValueProp>
        <ValueProp>
            <ValuePropImg src={suggest} />
            <Description>
            Suggest donation opportunity after other tasks completion
            </Description>
        </ValueProp>
      </ValuePropsContainer>
    </Container>
  )
})

export default NextSteps
