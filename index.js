import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'

import Casestudy from '../components/caseStudy'
import Experience from '../components/experience'
import Skills from '../components/skills'
import OtherWork from '../components/otherWork'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Link = styled.a`
    color: #FFFFFF;    
    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
    padding-bottom: 4px;
    z-index: 1;
    display: inline-block;
    position: relative;

    
    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: .07em;
    height: .1em;
    width: 100%;
    background: linear-gradient(110deg, #FFD23E, #F7991E, #EF4266, #0FAD69, #3BCEAC);
    z-index: -1;
    transition: height .25s cubic-bezier(.6,0,.4,1);
}

    &:hover::after {
    height: .5em;
    
}
`

const IndexPage = () => (
  <Layout>
    <div>    
      <div className="Hero">
        <div className="HeroGroup">
          <h1>I am the fifth Beatle. <br /><br />
          While my band is on hiatus, I’m focused on designing meaningful products.</h1>
          <br />
          <p>Principal Product Designer at <Link href="https://www.trifectanutrition.com" target="_blank">Trifecta</Link></p>
        </div>
      </div>  

      <div>
       
        
      </div>  
      <ScrollAnimation 
        animateIn='fadeIn'      
        duration={2}
        delay={2}
      >
        <Casestudy 
          title="Case Studies">
        </Casestudy>  
      </ScrollAnimation>

      <ScrollAnimation 
        animateIn='fadeIn'      
        duration={2}
        delay={2}
      >
        <Experience />
      </ScrollAnimation>
      <ScrollAnimation 
        animateIn='fadeIn'      
        duration={2}
        delay={2}
      >
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation 
        animateIn='fadeIn'      
        duration={2}
        delay={2}
      >
      
        <OtherWork />      
      </ScrollAnimation>
    

    </div>
  </Layout>
)

export default IndexPage
