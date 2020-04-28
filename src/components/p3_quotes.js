import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body, Caption } from '../layouts/typography'

const Container = styled.div`
    display: flex;
    margin: 10px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 20px 24px 70px;
    }

    @media (max-width: 500px) {
        margin: 20px 24px 10px;
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
    width: 100%;
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
        margin-top: 30px;
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
            <Title>Disaster relief notification feedback</Title>
        </TitleContainer>
        <Description>
            The disaster relief notification was included in the notification testing series allowing me to
            focus my research sessions on the donate action tile. Later I watched 
            the sessions and collected findings. Here are some of the participant quotes: 
        </Description>
        <Comments>
            <Comment 
                text="''This is great...I want to send money to charities that are on the ground helping in a disaster but when you look up charities online, you can never seem to get a straight answer.''"
                name="Jude L."
                role="Participant"
            />
            <Comment 
                text="''I like that it is a quick 1,2,3 click to donate to help people who are in these terrible situations.''"
                name="Sadie R."
                role="Participant"
            />
            
        </Comments>
        <Comments>
            <Comment 
                text="''I didn't know PayPal does fundraising for natural disasters, go PayPal!...This is a notification I want to see.''"
                name="Pete B."
                role="Participant"
            />
        </Comments>
    </Container>
)

export default Quotes