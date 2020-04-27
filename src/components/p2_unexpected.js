import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body, Caption } from '../layouts/typography'

const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 40px 24px 0px;
    }

    @media (max-width: 500px) {
        margin: 40px 24px 0px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    width: 1000px;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 0px;
    }
`

const Title = styled(Header6)`  
    width: 1000px;
    color: #000000;
    margin-top: 0px;
    margin-bottom: 0px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 0px;
    }

`

const Comments = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin-top: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin-top: 0px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        width: 100%;
        margin-top: -10px;
    }

    @media (max-width: 450px) {
        flex-direction: column;
        max-width: 300px;
    }
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 20px 45px;
    width: 1000px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0px 0px 50px;
    }

    @media (max-width: 500px) {
        margin: 12px 0px 50px;
    }

`

const CommentContent = styled(Lead)`
    margin-top: 0px;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
    }
`

const CommentName = styled(Caption)`    
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: -15px;

    @media (max-width: 768px) {
        margin-bottom: -15px;
    }
`


const Comment =({text, name, role}) => {
    return (
            <CommentContainer>
                <CommentContent>{text}</CommentContent>
                <CommentName>{name}</CommentName>
                <CommentName>{role}</CommentName>
            </CommentContainer>
    )
}
const Quotes = props => (
    <Container id="quotes">
        <TitleContainer>
            <Title>Unexpected feedback</Title>
        </TitleContainer>
        <Description>
            We noticed a number of users adopted the feature right away, but after performing a few successful flower based infusion tests, that stopped using the feature. We invited a small sample of these users into the office to better understand what was causing the dropoff. 
        </Description>
        <Comments>
            <Comment 
                text="''It’s great, I can do this, but to be honest… the test is kinda involved. I just want a ball park number so I can get back to baking. It’s all gotta go to the lab anyways, I want to be relatively confident it’ll pass.''"
                name="Anonymous Cannachef"
                role="tCheck user"
            />
        </Comments>
        <Description>
            Other users shared the same sentiment. We needed to find a way to enable users who were not concerned about an exact test result to be able to perform a flower based infusion test. 
        </Description>
        
    </Container>
)

export default Quotes