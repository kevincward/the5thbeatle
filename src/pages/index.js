import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import Casestudy from '../components/caseStudy'
import Experience from '../components/experience'
import Skills from '../components/skills'
import OtherWork from '../components/otherWork'


const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>I am the fifth Beatle. <br /><br />
          While my band is on hiatus, I look for problems and design solutions.</h1>
          <br />
          <p>UX Director at <a href="https://tcheck.me" target="_blank">Engineered Medical Technologies</a></p>
        </div>
      </div>
      
      
      <Casestudy 
        title="Case Studies">
      </Casestudy>  
      
      <Experience />
      <Skills />
      <OtherWork />      

    

    </div>
  </Layout>
)

export default IndexPage
