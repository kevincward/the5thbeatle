import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'

const Container = styled.div`
  padding-top: 100px;
`

const Blank = () => (
  <Layout>
    <Container>
      <h1>
        <center>Blank</center>
      </h1>
    </Container>
  </Layout>
)

export default Blank
