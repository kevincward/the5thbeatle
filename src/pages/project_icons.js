import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_proj'
import Layout from '../layouts'
import ContentBlurb from '../components/contentblurb'

import DonateBkgd from '../images/hero_projectdonate.png'
import HeroIcon from '../images/ic_other_icons.svg'
import CauseIcons from '../images/project_icons_cause.svg'
import tCheckIcons from '../images/project_icons_tcheck.svg'
import OtherIcons from '../images/project_icons_other.svg'


const Container = styled.div`
    display: flex;
    padding: 160px 30px 80px;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 60px 24px;
    }
`


const Content = styled.div`
`

const Divider = styled.div`
  border: solid 1px rgba(0,0,0,.05);
  margin: 80px 90px;

`

const ProjectIcons = () => {    

  
  return (
    <Layout>
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        <Content>
          <Hero 
          heroImgURL={DonateBkgd}
          title={"Icons"}
          img={HeroIcon}
          />
          
          <ContentBlurb
            title={
              "New Charity Categories"
            }
            description={
              "The PayPal content designer and myself worked with the proudct team to restructure our charity categories to improve searchability for donors and align to US NTEE code system to better integrate with partner's data. This gave me the opportunity to design icons for each of the categories."
            }
            image={CauseIcons}
          />
          <Divider />

          <ContentBlurb
            title={
              "tCheck App Icons"
            }
            description={
              "To help user's easily select the type of test they want to perform and the infused base they are tesiting, I designed some colorful icons. To give the app and website personality, I created a marijuana leaf with different expressions to convey the content."
            }
            image={tCheckIcons}
          />
          <Divider />

          <ContentBlurb
            title={
              "Miscellaneous Icons"
            }
            description={
              "Other icons and explorations from other projects."
            }
            image={OtherIcons}
          />
          
        </Content>        
      </Container>
    </Layout>
  )
}

export default ProjectIcons
