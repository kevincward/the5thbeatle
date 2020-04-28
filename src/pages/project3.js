import React from 'react'
import styled from "styled-components"
import Layout from '../layouts'
import { Header5 } from '../layouts/typography'

import Hero from '../components/hero_case'
import ContentBlurb from '../components/contentblurb'
import TwoColumnBlurb from '../components/twocolumnblurb'
import Tiles from '../components/p3_tiles'
import OverView from '../components/p3_overView'
import Quotes from '../components/p3_quotes'
import Validate from '../components/p3_validate'
import Solution from '../components/p3_solution'
import Features from '../components/p3_features';
import ProjectLearnings from '../components/p3_projectlearnings'
import Reframing from '../components/p3_reframing'

import AfinMap from '../images/affinitymap_remind.png'
import AfinMap2 from '../images/affinitymap_remind2.png'
import Fogg from '../images/foggmodel_remind.png'
import IA from '../images/paypal_ia_remind.png'
import IA2 from '../images/paypal_ia2_remind.png'
import TriggerImp from '../images/trigger_imp_remind.png'
import TriggerImp2 from '../images/trigger_imp2_remind.png'
import TriggerHab3 from '../images/trigger_hab3_remind.png'
import TriggerHab1 from '../images/trigger_hab_remind.png'
import TriggerHab2 from '../images/trigger_hab2_remind.png'
import Researcher from '../images/p3_researcher.jpg'
import TileTest1 from '../images/p3_tiletest1.jpg'
import TileTest2 from '../images/p3_tiletest2.jpg'
import ContentBlurb2img from '../components/contentblurb2img'
import DonateBkgd from '../images/prj3_bkgd.png'
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
    background-color: #F8F3FF;
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
    margin: 30px 0px 0px;
   
    @media (max-width: 768px) {
        width: 93%;
    }

    @media (max-width: 500px) {
      width: 87%;

    }

`

const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
  margin-top: 50px;
`

const Project3 = () => {    

  
  return (
    <Layout>
      <Hero 
          heroImgURL={DonateBkgd}
          title={"How to remind (not nag) people to donate"}
          img={HeroIcon}
          />
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */} 
          <OverView />
      </Container>
      <ContainerGray>      
        <ContentBlurb
           title={
             "What motivates people to donate?"
            }
           description={
              "To keep in touch with users of our product, I ran monthly research sessions to identify opportunities to enhance the donate feature and learn about donor behavior. Over the course of several sessions, I began to better understand behavior around donation triggers."
            }
            image={Researcher}
          />
        <ContentBlurb
            title={
              "Putting all the feedback into Miro"
            }
            description={
              "I created an affinity map to organize the types of donation prompts we heard about from participants."
            }
            image={AfinMap}
          />
        <ContentBlurb
          description={
            "The prompt groupings fall into two behaviors, deliverate donors and impulsive donors."
          }
          image={AfinMap2}
        />
        <Reframing />
        <TwoColumnBlurb
            title={
              "When designing triggers, we were inspired by the Fogg Behavior Model"
            }
            description={
              "We took into account the donor’s motivation and ability in each behavior scenario to ensure successful triggers."
            }
            image={Fogg}
          />
      </ContainerGray>
      <Container>  
          <ContentBlurb2img
            title={
              "Aligning with the ecosystem"
            }
            description={
              "Feature success was dependent on how well it fit within the PayPal ecosystem. While working on this project, I spent a lot of time collaborating with the PayPal consumer design team who was focused on two initiatives:"
            }
            image={IA}
            image2={IA2}
          />
          <Divider />
          <ContentBlurb2img
            title={
              "Notifications- an opportunity to make a quick impact"
            }
            description={
              "PayPal’s new information architecture prioritizes notifications at the top of the dashboard to alert users of account activity (e.g. you received money), impending bills, and announcements. The card framework could be easily leveraged to draw awareness and provide the opportunity to drive users to disaster response fundraisering pages on PayPal."
            }
            image={TriggerImp2}
            image2={TriggerImp}
          />
      </Container>
      <ContainerGray>
          <ContentBlurb
            title={
              "Suggested task tiles- consistent placement for habitual donors"
            }
            description={
              "Moving away from the one-dashboard-fits-all model, PayPal’s new logged in experience surfaces actions and suggested action tiles based on the user’s behavior and segmentation. For users that have donated with PayPal, they are grouped into the “donor intent” segment and a donate tile would show up on their dashboard. For users that seem like they might donate with PayPal (based on their web history, etc), they are added into the “potential donor” segment. I created multiple design concepts for both groups to put in front of users."
            }
            image={TriggerHab3}
          />
          <Tiles
            title={
              "Donor intent tile concepts"
            }
            description={
              "For the MVP version of “donor intent” tile, the call to action would be to support the charity the user had most frequently supported. I came up with different tile layouts and messaging for testing."
            }
            image={TriggerHab1}
          />
          <Tiles
            title={
              "Potential donor tile concepts"
            }
            description={
              "For the “potential donor” tile, the PayPal data science model was used to make smart recommendations based on the user’s browsing history, location, and charities supported by their PayPal contacts."
            }
            image={TriggerHab2}
          />
          
      </ContainerGray>
      <Container>
          <Title>What users had to say</Title>
          <br />
          <Quotes />
          <ContentBlurb2img
            title={
              "Build your own PayPal dashboard"
            }
            description={
              "Gathering feedback on the action tiles would be a little bit harder. I chose to do an exercise where I would ask participants to build their ideal PayPal dashboard with a number of paper components to choose from (including my iterations of the donor tile) Here is some of the dashboards created:"
            }
            image={TileTest1}
            image2={TileTest2}
          />
          <Validate />       
      </Container>
      <ContainerGray>
          <Solution
          id="Solution3"
          />
          <Features />
      </ContainerGray>
      <Container>
          <ProjectLearnings />
      </Container>
  
        
        
    </Layout>
  )
}

export default Project3
