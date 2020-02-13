import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_case'
import OverView from '../components/overView2'
import Layout from '../layouts'
import ContentBlurb from '../components/contentblurb'
import ProjectLearnings from '../components/p2_projectlearnings'
import Solution from '../components/solution';
import Features from '../components/p2_features'
import TwoColumnBlurb from '../components/twocolumnblurb'
import Unexpected from '../components/p2_unexpected'
import UserWants from '../components/p2_userwants'
import FirstPass from '../components/p2_firstpass'
import TestSuccess from '../components/p2_testsuccess'


import Personas from '../images/personas_donate.png'
import Insights from '../images/insights_donate.svg'
import Bkgd from '../images/hero_backgd_cs2.svg'
import HeroIcon from '../images/ic_timeline_tch.svg'
import DefaultOption from '../images/p2_adddefault.png'


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

const Project2 = () => {    

  
  return (
    <Layout>
      <Hero 
          heroImgURL={Bkgd}
          title={"Testing cannabis infusions with tCheck"}
          img={HeroIcon}
          />
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        <Content>  
          <OverView />
          <UserWants />
          <FirstPass />
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
        
        <Divider />
        <TestSuccess />
        <Unexpected />
        <Divider />
          <TwoColumnBlurb
              title={
                "Ok, let’s offer a default option"
              }
              description={
                "After the conference, I met with leadership and our engineer lead to debrief on all the feedback. We agreed that we needed to account for users who wanted to run a flower based infusion potency test without mapping their flower strain."
              }
              description2={
                "Having ran countless tests on several strain varieties we were confident that we could offer a default strain setting for users that would use the average of 12 different cannabis strains."
              }

              image={DefaultOption}
            />
        </Content>        
      </Container> 
        <Solution
          heroImgURL={Bkgd}
          title={"The Solution"}
          description={"For MVP, we decided to only release the default setting for cannbis plant infusion potenct testing. This would allow us to introduce users to the feature slowly for increased adoption and do more user testing on the strain mapping flow. The roadmap plans for the strain map flow to be avaialble this spring."}
        />  
      <Container>
        <Content>
        <Features />
        <ProjectLearnings />
        </Content>        
      </Container>
    </Layout>
  )
}

export default Project2
