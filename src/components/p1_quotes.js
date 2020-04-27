import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body, Caption } from '../layouts/typography'


const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 20px 24px 70px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    width: 1000px;


    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 16px;
    }
`

const Title = styled(Header6)`  
    width: 1000px;
    color: #000000;
    margin-top: 0px;
    margin-bottom: 0px;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 768px;
        margin-bottom: 15px;
    }
`

const Description = styled(Body)`
    color: rgba(0, 0, 0, 0.7);
    max-width: 1000px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const Comments = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 80%;
    margin-top: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 450px) {
        flex-direction: column;
        max-width: 300px;
    }
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 20px;

    @media (max-width: 768px) {
        margin: 0px 0px;
    }

    @media (max-width: 500px) {
        margin: 12px 0px;
    }

`

const CommentContent = styled(Lead)`
    width: 435px;
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
const Quotes1 = props => (
    <Container id="quotes">
        <TitleContainer>
            <Title>What participants said</Title>
        </TitleContainer>
        <Description>
            I recruited individuals who had made a digital donation in the last six months for the in-depth interviews. 
            In each session, I asked the participant to walk me through their last donation experience and tell me about what 
            their ideal donation app could do. 
        </Description>
        <Comments>
            <Comment 
                text="''I really don’t have to donate, so why do they make the donation [process] so hard?''"
                name="Michelle S."
                role="Participant"
            />
            <Comment 
                text="''I keep asking myself- is this a real charity and what will they do with the money? My donate app would tell you right away.''"
                name="George P."
                role="Participant"
            />
        </Comments>
    </Container>
)

export default Quotes1