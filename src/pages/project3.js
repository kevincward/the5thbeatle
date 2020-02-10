import React from 'react'
import styled from "styled-components"
import Layout from '../layouts'
import Hero from '../components/hero_case'
import ContentBlurb from '../components/contentblurb'
import DonateBkgd from '../images/hero_backgd_cs3.svg'
import HeroIcon from '../images/ic_timeline_pp.svg'
import TwoColumnBlurb from '../components/twocolumnblurb'
import OverView from '../components/overView3'
import Research from '../components/p3_research'
import Quotes from '../components/p3_quotes'
import Validate from '../components/p3_validate'
import Solutions from '../components/solution';

import AfinMap from '../images/affinitymap_remind.png'
import AfinMap2 from '../images/affinitymap_remind2.png'
import Pattern from '../images/pattern_remind.png'
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
    margin: 0px 3px;
    padding: 10px 30px;
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
const Description = styled.div`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin: 80px 90px;
`


const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
  margin: 80px 90px;

`

const Project3 = () => {    

  
  return (
    <Layout>
      <Hero 
          heroImgURL={DonateBkgd}
          title={"PayPal Donor Triggers"}
          img={HeroIcon}
          />
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        <Content>  
          <OverView />
          <Title>Research</Title>
          <TwoColumnBlurb
            title={
              "What motivates people to donate?"
            }
            description={
              "As a way to keep in touch with users of our product, I ran monthly research sessions to identify opportunities to enhance the donate feature and learn about donor behavior. Over the course of several sessions, I began to better understand behavior around donation triggers."
            }
            image={Researcher}
          />
          <ContentBlurb
            title={
              "Findings"
            }
            description={
              "I created an affinity map to organize the types of donation prompts we heard about from participants."
            }
            image={AfinMap}
          />
        </Content>
      </Container>
      <ContainerGray>
        <Content>
        <Title>Insights</Title>
        <ContentBlurb
          description={
            "The prompt groupings fall into two donor behaviors…"
          }
          image={AfinMap2}
          image2={Pattern}
        />
        </Content>
      </ContainerGray>
      <Container>
        <Content>    
        <TwoColumnBlurb
            title={
              "When designing triggers, we were inspired by the Fogg Behavior Model"
            }
            description={
              "We took into account donor’s motivation and ability in each behavior scenario to ensure successful triggers."
            }
            image={Fogg}
          />
          <ContentBlurb
            title={
              "Aligning with the ecosystem"
            }
            description={
              "Feature success was dependent on how well it fit within the PayPal ecosystem. While working on this project, I spent a lot of time collaborating with the PayPal consumer design team who was focused on two initiatives:"
            }
            image={IA}
            image2={IA2}
          />
          <ContentBlurb
            title={
              "Notifications- an opportunity to make a quick impact"
            }
            description={
              "PayPal’s new information architecture prioritizes notifications at the top of the dashboard to alert users of account activity (e.g. you received money), impending bills, and announcements. The card framework could be easily leveraged to draw awareness and provide the opportunity to drive users to disaster response fundraisering pages on PayPal."
            }
            image={TriggerImp2}
            image2={TriggerImp}
          />
        </Content>
      </Container>
      <ContainerGray>
        <Content>
          <ContentBlurb
            title={
              "Suggested task tiles- consistent placement for habitual donors"
            }
            description={
              "Moving away from the one-dashboard-fits-all model, PayPal’s new logged in experience surfaces actions and suggested action tiles based on the user’s behavior and segmentation. For users that have donated with PayPal, they are grouped into the “donor intent” segment and a donate tile would show up on their dashboard. For users that seem like they might donate with PayPal (based on their web history, etc), they are added into the “potential donor” segment. I created multiple design concepts for both groups to put in front of users."
            }
            image={TriggerHab3}
          />
          <TwoColumnBlurb
            title={
              "Donor intent tile concepts"
            }
            description={
              "For the MVP version of “donor intent” tile, the call to action would be to support the charity the user had most frequently supported. I came up with different tile layouts and messaging for testing."
            }
            image={TriggerHab1}
          />
          <TwoColumnBlurb
            title={
              "Potential Donor tile concepts"
            }
            description={
              "For the “potential donor” tile, the PayPal data science model was used to make smart recommendations based on the user’s browsing history, location, and charities supported by their contacts."
            }
            image={TriggerHab2}
          />
        </Content>
      </ContainerGray>
      <Container>
        <Content>
          <Title>Evaluating Concepts</Title>
          <br />
          <Quotes />
          <ContentBlurb
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
          <Solutions />
  
        
        </Content>        
      </Container>
    </Layout>
  )
}

export default Project3
