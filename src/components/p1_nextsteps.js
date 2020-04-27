import React from "react"
import styled from "styled-components"
import { Header6, Body } from '../layouts/typography'

import personalize from '../images/ic_donatestep_pers.svg'
import entrypoint from '../images/ic_donatestep_entr.svg'
import suggest from '../images/ic_donatestep_sugg.svg'

const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;

    @media (max-width: 768px) {
        margin: 20px 24px 40px;
    }

    @media (max-width: 500px) {
        margin: 5px 24px 40px;
    }
`

const ValuePropsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  width: 1000px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 40px 0;
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
`


const ValueProp = styled.div`
  text-align: center;
  width: 200px;
  
  @media (max-width: 768px) {
    width: 222px;
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


const NextSteps = React.memo(() => {
  return (
    
    <Container>
      <Title>Next steps</Title>
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
                Create additional donation entry points where relevant
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
