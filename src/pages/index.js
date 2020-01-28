import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import Casestudy from '../components/caseStudy'
import Experience from '../components/experience'
import Skills from '../components/skills'

import { sizes } from "../layouts/Layout"


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

    

      

      

    
      
    {/*
      <div className='Cards'>
        <h2>Case Studies</h2>
        <div className="CardGroup">
          <Card
          title="React for Designers"
          text="12 sections"  />
          <Card
          title="React for Designers"
          text="12 sections"  />
          <Card
          title="React for Designers"
          text="12 sections"  />
        </div>  
      </div>
      */}

    

    </div>
  </Layout>
)

export default IndexPage
