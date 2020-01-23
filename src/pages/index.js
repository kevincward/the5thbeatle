import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Casestudy from '../components/caseStudy'
import OtherWork from '../components/otherWork'

import { sizes } from "../layouts/Layout"


const IndexPage = () => (
  
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
    
    <OtherWork />

   

    

    

  
    
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
  
)

export default IndexPage
