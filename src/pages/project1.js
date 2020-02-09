import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_case'
import SolutionBkgd from '../images/solution_donate.jpg'
import OverView from '../components/overView1'
import Quotes from '../components/quotes'
import Layout from '../layouts'
import ResearchPlan from '../components/p1_researchplan'
import ContentBlurb from '../components/contentblurb'
import Compete from '../images/compete_donate.png'
import Personas from '../images/personas_donate.png'
import Insights from '../images/insights_donate.svg'
import HowMightWe from '../images/howmightwe_donate.png'
import FeatPrior from '../images/featurepri_donate.png'
import Concept from '../images/concept_donate.png'
import Validate from '../components/p1_validate'
import NextSteps from '../components/nextsteps'
import ProjectLearnings from '../components/p1_projectlearnings'
import Solutions from '../components/solution';
import Features from '../components/p1_features'
import DonateBkgd from '../images/hero_backgd_cs1.svg'
import HeroIcon from '../images/ic_timeline_pp.svg'


const Container = styled.div`
    display: flex;
    padding: 80px 30px;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 60px 24px;
    }
`

const ContainerGray = styled.div`
    margin: 44px 3px;
    padding: 1px 0px;
    border-radius: 10px;
    background-color: #f8f8f8;
    @media (max-width: 768px) {
          padding: 32px 23px;
          width: auto;
          margin-bottom: 300px;
      }
` 

const Content = styled.div`
`
const Title = styled.div`

    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #000000;
    margin: 80px 90px -68px;
    @media (max-width: 768px) {
        margin: 40px 25px -68px;
        width: 100%;
        font-size: 28px;
    }
`

const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
  margin: 80px 90px;

`

const Project1 = () => {    

  
  return (
    <Layout>
      <Hero 
          heroImgURL={DonateBkgd}
          title={"PayPal Native Donation Experience"}
          img={HeroIcon}
          />
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        <Content>  
          <OverView />
          <ResearchPlan />
          <Quotes />
          
          <ContentBlurb
            title={
              "What’s out there"
            }
            image={Compete}
          />
          <Divider />
          <ContentBlurb
            description={
              "Next, I used all of the qualitative data I gathered during the interviews to create two user personas."
            }
            image={Personas}
          />
      </Content>
      </Container>
      <ContainerGray>
        <Content>
        <Title>Insights</Title>
        <ContentBlurb
          description={
            "After conducting the interviews, comparing competitive products, and reviewing industry insights, I compiled the findings into three groups:"
          }
          image={Insights}
        />
        </Content>
      </ContainerGray>
      <Container>
        <Content>  
        <ContentBlurb
          title={
            "How Might We…"
          }
          description={
            "With research finished, we needed to identify and prioritize what features would make it into the MVP of native PayPal Donate. My product manager and I took a deeper dive into the insights derived from the research."
          }
          image={HowMightWe}
        />
       
        <ContentBlurb
          title={
            "What features shall we prioritize?"
          }
          description={
            "With the help of other social impact product managers, we generated a list of donate features to further define and guide the vision for the product. Prioritizing the features with supporting research created a clear order of execution."
          }
          image={FeatPrior}
        />
        <Divider />
        
        <ContentBlurb
          title={
            "Conceptualization"
          }
          description={
            "I took these features and created an information architecture and low-fi concepts, leveraging components from the current app design for consistency. Once approved by the Product and Engineering teams, we began to conduct usability tests with the low fidelity mockups."
          }
          image={Concept}
        />
        
        <Divider />
        <Validate />
          
        <Solutions
          heroImgURL={SolutionBkgd}
          title={"The Solution"}
          description={"We released the MVP of the native Donate feature three months after the launch of the PayPal app redesign. The focus of the MVP experience was discovery of charities and the ability to donate quickly."}
        />  
       
        
        <Features />
        <ProjectLearnings />
        <Divider />
        <NextSteps />
        </Content>        
      </Container>
    </Layout>
  )
}

export default Project1
