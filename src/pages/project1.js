import React from 'react'
import styled from "styled-components"
import Hero1 from '../components/hero1'
import OverView from '../components/overView'
import Quotes from '../components/quotes'
import Layout from '../layouts'

const Container = styled.div`
    display: flex;
    padding: 160px 30px 80px;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 60px 15px 44px;
    }
`

const Content = styled.div`
`

const Project1 = () => {    

  
  return (
    <Layout>
      <Container>
        {/* {window.matchMedia('(max-width: 768px)').matches ? 
         <HeadLine>Headline</HeadLine>
        : null} */}
        <Content>
          <Hero1 />
          <OverView />
          <Quotes />
        </Content>        
      </Container>
    </Layout>
  )
}

export default Project1
