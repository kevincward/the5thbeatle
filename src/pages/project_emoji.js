import React from 'react'
import styled from "styled-components"
import Hero from '../components/hero_proj'
import Layout from '../layouts'
import ModalImage from "react-modal-image";


import Bkgd from '../images/hero_backgd_p2.svg'
import HeroIcon from '../images/ic_other_emoj.svg'
import Emoji from '../images/prjt_emoji1.png'


const Container = styled.div`
    display: flex;
    padding: 80px 30px 280px;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 60px 15px 44px;
    }
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.11px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 32px 0;
  }
`

const Image = styled.div`
  display: block;
  height: 100%;
  max-width: 800px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  
  .__react_modal_image__modal_container {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const Content = styled.div`
  width: 60%;
  margin-left: 80px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`

const HeadLine = styled.div`
    width: 565px;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 32px;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
  @media (max-width: 768px) {
        width: 100%;
    }
`

const Link =styled.a`
  color: #540D6E;
  font-size: 18px;
  font-weight: 700;
  line-height:1.5;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 768px) {
    align-items: center;
    }
  `

const ProjectEmoji = React.memo(({image}) => { 

  
  return (
    <Layout>
      <Hero 
          heroImgURL={Bkgd}
          title={"Emoji"}
          img={HeroIcon}
          />
      <Container>
        {typeof window !== 'undefined'?(window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Drone Emoji Proposal</HeadLine>
        : null):null}
        <Content>
          {typeof window !== 'undefined'?(!window.matchMedia('(max-width: 768px)').matches ? 
            <HeadLine>Drone Emoji Proposal</HeadLine>
          : null):null}
          <Text>
            PayPal held an emoji hackathon for participants to present a new idea for an emoji to an actual 
            member of Unicode and prepare their emoji proposal. I proposed the addition of a drone emoji.
            <br />
            <br />
            <br />
            <Link href="https://drive.google.com/file/d/1lslLloDSprBxSri8EcQKd8Kk9vc6eOLY/view?usp=sharing" target='blank'>See Presentation</Link>
          </Text>
          </Content>  
          <Image>
                 <ModalImage
                    small={Emoji}
                    medium={Emoji}
                    imageBackgroundColor="#ffff"
                 />
                 </Image>    
        
      </Container>
    </Layout>
  
  )
})

export default ProjectEmoji
