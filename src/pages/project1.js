import React from 'react'
import styled from "styled-components"
import { Header5 } from '../layouts/typography'

import Hero from '../components/hero_case'
import OverView from '../components/p1_overView'
import Quotes from '../components/p1_quotes'
import Layout from '../layouts'
import ResearchPlan from '../components/p1_researchplan'
import ContentBlurb from '../components/contentblurb'
import ContentBlurb2img from '../components/contentblurb2img'
import Validate from '../components/p1_validate'
import NextSteps from '../components/p1_nextsteps'
import ProjectLearnings from '../components/p1_projectlearnings'
import Solution from '../components/p1_solution'
import Features from '../components/p1_features'
import Impact from '../components/p1_impact'

import Compete from '../images/compete_donate.png'
import Personas from '../images/personas_donate.png'
import Insights from '../images/p1_insights.png'
import HowMightWe from '../images/howmightwe_donate.png'
import FeatPrior from '../images/featurepri_donate.png'
import Concept from '../images/concept_donate.png'
import DonateBkgd from '../images/prj1_bkgd.png'
import HeroIcon from '../images/ic_timeline_pp.svg'

const Container = styled.div`
    display: flex;
    padding: 40px 0px 0px;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0px 24px 70px;
    }

    @media (max-width: 500px) {
        padding: 15px 24px 70px;
    }
`

const ContainerGray = styled.div`
    background-size: cover;
    background-color: #FFF7F7;
    padding: 40px 0px 75px;
    
    @media (max-width: 768px) { 
      padding: 32px 24px 60px;
      width: auto;
      margin-bottom: 10px;
      }

      @media (max-width: 500px) {
        padding: 32px 24px 70px;
    }
` 

const Title = styled(Header5)`  
    width: 1000px;
    margin: 40px 90px;
    margin-bottom: -50px;
    align-items: center;
   
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 20%;
        margin-bottom: -60px;
        margin-top: 50px;
    }

    @media (max-width: 500px) {
        margin-left: 42%;
    }

`

const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
`

const Project1 = () => {    

  
  return (
    <Layout>
      <Hero 
          heroImgURL={DonateBkgd}
          title={"Improving the mobile donation experience"}
          img={HeroIcon}
          />
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        
        <OverView />
      </Container>
      <ContainerGray>
          <ResearchPlan />
          <Quotes />
          <ContentBlurb
            title={
              "Benchmarking"
            }
            description={
              "Next, I used the qualitative data I gathered from the interviews to create two user personas."
            }
            image={Compete}
          />
          <ContentBlurb
            title={
              "Organizing the insights"
            }
            description={
              "After conducting the interviews, comparing competitive products, and reviewing industry insights, I compiled the findings into three themes:"
            }
            image={Insights}
          />
          <ContentBlurb
            description={
              "Next, I used the qualitative data I gathered from the interviews to create two user personas."
            }
            image={Personas}
          />  
      </ContainerGray>
      <Container>
        <Title>Ideation</Title>  
        <ContentBlurb2img
          description={
            "Confident with the research findings, we needed to identify and prioritize what features would make it into the MVP of native PayPal Donate. My product manager and I took a deeper dive into the insights derived from the research."
          }
          image={HowMightWe}
          image2={FeatPrior}
        />
        <ContentBlurb
          title={
            "Building wireframes"
          }
          description={
            "With our personas and features established, I created an information architecture and screen wireframes, leveraging components from the current app design for consistency. Once approved by the Product and Engineering teams, we began to conduct usability tests with the low fidelity mockups."
          }
          image={Concept}
        />
        <Validate />
      </Container>
      <ContainerGray>  
        <Solution
          id="Solution1"
        />  
        <Divider />
        <Features />

      </ContainerGray>
      <Container>
        <Impact />
        <ProjectLearnings />
        <Divider />
        <NextSteps />
               
      </Container>
    </Layout>
  )
}

export default Project1
