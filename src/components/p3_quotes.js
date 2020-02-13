import React from 'react'
import styled from 'styled-components'
import shape from '../images/shape.png'

const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 60px 24px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

const Title = styled.div`

    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.55px;
    color: #000000;
`

const Img = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 11px;
`

const Description = styled.div`

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.11px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
`

const Comments = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

const CommentContent = styled.div`

    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: -0.09px;
    color: #000000;
    width: 435px;
    margin-bottom: 16px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const CommentName = styled.div`

    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.7); 
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
            <Img src={shape}/>
            <Title>Participant comments on disaster relief notification</Title>
        </TitleContainer>
        <Description>
            I asked the Consumer design team to include the disaster relief 
            notification in with their notification testing series so that I could 
            focus my research sessions on the donate action tile. Later I watched the sessions and collected findings. Here are some of 
            the participant quotes: 
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
            <Comment 
                text="''I didn't know PayPal does fundraising for natural disasters, go PayPal!...This is a notification I want to see.''"
                name="Pete B."
                role="Participant"
            />
        </Comments>
    </Container>
)

export default Quotes