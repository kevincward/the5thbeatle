import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_case'
import OverView from '../components/p2_overView'
import Layout from '../layouts'
import ContentBlurb from '../components/contentblurb'
import ProjectLearnings from '../components/p2_projectlearnings'
import Unexpected from '../components/p2_unexpected'
import UserWants from '../components/p2_userwants'
import FirstPass from '../components/p2_firstpass'
import ProtoType from '../components/p2_prototype'
import Features from '../components/p2_features'
import Workshop from '../components/p2_workshop'
import Solution from '../components/p2_solution'
import { Header5 } from '../layouts/typography'
import Stakeholder from '../components/p2_stakeholderreqs'
import DefaultOption1 from '../components/p2_default_option'

import tCheck from '../images/p2_tcheck.jpg'
import Bkgd from '../images/prj2_bkgd.png'
import HeroIcon from '../images/ic_timeline_tch.svg'
import Notworking from '../components/p2_notworking'


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
    background-color: #E4F5FB;
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
        margin-bottom: -70px;
    }

    @media (max-width: 500px) {
        margin-left: 42%;
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
          title={"Complex measuring made easy"}
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
              "The tCheck device can collect live readings to address a major pain point for cannabis users: not knowing the potency of their cannabis infusions. Edibles are often used by cannabis users due to their convenience, discretion, and long-lasting effects. However, when it comes to creating edibles, proper dosing is critical to achieving the desired effect (too little there is no effect, too much and the user can become drowsy)."
            }
            image={tCheck}
          />
        <UserWants />
      </Container>
      <ContainerGray>   
        <FirstPass />
        <Stakeholder />
      </ContainerGray>
      <Container>
        <Workshop /> 
        <Notworking />
        <ProtoType />
      </Container>
      <ContainerGray>
        <Solution
          id="Solution2"
          /> 
        <Divider />  
        <Features /> 
        <Unexpected />
        <DefaultOption1 />   
      </ContainerGray>  
      <Container>
        <ProjectLearnings />      
      </Container>
    </Layout>
  )
}

export default Project2
