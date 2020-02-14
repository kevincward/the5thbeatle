import React from 'react'
import styled from 'styled-components'

import './Card.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px auto 100px;
    padding: 32px;
    @media (max-width: 768px) {
        margin: 60px auto 0px;
        padding: 32px 0px;
    }
` 



const Experience = styled.div`
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;    
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -100px auto;
    @media (max-width: 768px) {
        margin-top: -350px;
        padding: 24px 16px;
    }
` 

const ExpTitle = styled.div`    
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: -0.5px;
    text-align: left;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: auto;
        margin-bottom: 16px;
    }
` 

const ExpDescription = styled.div`    
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
`



const P1Features = props => (
    <Container>
        <Experience>
            <ExpTitle>
                The Results
            </ExpTitle>
            <ExpDescription>
                TBD, this feature was just launched. Check it out and let me know what you think.
            </ExpDescription>
        </Experience>
    </Container>
)

export default P1Features