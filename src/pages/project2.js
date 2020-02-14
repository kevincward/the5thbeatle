import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_case'
import OverView from '../components/overView2'
import Layout from '../layouts'
import ContentBlurb from '../components/contentblurb'
import ProjectLearnings from '../components/p2_projectlearnings'
import Solution from '../components/solution'
import Features from '../components/p2_features'
import TwoColumnBlurb from '../components/twocolumnblurb'
import Unexpected from '../components/p2_unexpected'
import UserWants from '../components/p2_userwants'
import FirstPass from '../components/p2_firstpass'
import ProtoType from '../components/p2_prototype'
import TestingSuccess from '../components/p2_testingsuccess'
import Workshop1 from '../components/p2_workshop'

import tCheck from '../images/p2_tcheck.jpg'
import Bkgd from '../images/hero_backgd_cs2.svg'
import HeroIcon from '../images/ic_timeline_tch.svg'
import DefaultOption from '../images/p2_adddefault.png'
import Reqs from '../images/p2_reqs.png'


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
    margin: 44px 30px;
    padding: 1px 0px;
    border-radius: 10px;
    background-color: #f8f8f8;
    
    @media (max-width: 768px) {
          padding: 32px 23px;
          width: auto;
          margin-bottom: 10px;
      }
` 

const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: normal;
    color: #000000;
    margin: 80px 90px -68px;
    
    @media (max-width: 768px) {
        margin: 30px 24px -20px;
    }
`

const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
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
          <OverView />
          <ContentBlurb
            title={
              "A bit about tCheck"
            }
            description={
              "Engineered Medical Technologies (EMT) created the tCheck device, the first handheld cannabis potency tester which can collect live readings to address a major pain point for cannabis users: not knowing the potency of their cannabis infusions. Edibles are often used by cannabis users due to their convenience, discretion, and long-lasting effects. However, when it comes to creating edibles, proper dosing is critical to achieving the desired effect (too little there is no effect, too much and the user can become drowsy)."
            }
            image={tCheck}
          />
          <UserWants />
          <Divider />
          <FirstPass />
      </Container>
      <ContainerGray>
          <Title>Fleshing out the stakeholder requirements</Title>
          <ContentBlurb
            description={
              "Having met with the engineering team to discuss the technical workflow and contstraints, I then sat with leadership to discuss the business goals and user needs for this feature."
            }
            image={Reqs}
          />
      </ContainerGray>
      <Container>
          <Workshop1 /> 
          <TestingSuccess />
          <ProtoType />
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
      </Container> 
        <Solution
          id="Solution2"
          heroImgURL={Bkgd}
          title={"The Solution"}
          description={"For MVP, we decided to only release the default setting for cannbis plant infusion potenct testing. This would allow us to introduce users to the feature slowly for increased adoption and do more user testing on the strain mapping flow. The roadmap plans for the strain map flow to be avaialble this spring."}
        />  
      <Container>
        <Features />
        <ProjectLearnings />      
      </Container>
    </Layout>
  )
}

export default Project2
