import React from 'react'
import styled from 'styled-components'
import './Card.css'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
` 

const Content = styled.div`
    height: 440px;
    width: 50%;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {        
        width: 100%;
    }
    
` 


const hero1 = props => (
    <Container>
        <Content>
            Hero
        </Content>
    </Container>
)

export default hero1