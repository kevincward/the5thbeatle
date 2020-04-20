import React from 'react'
import Layout from '../layouts'
import Casestudy from '../components/caseStudy'
import Experience from '../components/experience'
import Skills from '../components/skills'
import OtherWork from '../components/otherWork'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const IndexPage = () => (
  <Layout>
    <div>    
      <div className="Hero">
        <div className="HeroGroup">
          <h1>I am the fifth Beatle. <br /><br />
          While my band is on hiatus, I design products that make life better.</h1>
          <br />
          <p>UX Director at <a href="https://tcheck.me" target="_blank">Engineered Medical Technologies</a></p>
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
