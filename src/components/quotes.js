import React from 'react'
import styled from 'styled-components'
import shape from '../images/shape.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 32px;
    @media (max-width: 768px) {
        margin: 32px 16px;
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
    font-family: Inter;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.55px;
    color: #1a1a1a;
`

const Img = styled.img`
    width: 38px;
    height: 38px;
    margin-right: 11px;
`

const Description = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: normal;
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
    font-family: Inter;
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
    font-family: Inter;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: -0.11px;
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
            <Title>Participant comments</Title>
        </TitleContainer>
        <Description>
            Individuals who had made a digital donation in the last six months were recruited for in-depth interviews. 
            In each session, I asked the participant to walk me through their last donation experience and tell me about what 
            their ideal donation app could do. 
        </Description>
        <Comments>
            <Comment 
                text="I really don’t have to donate, so why do they make the donation [process] so hard?"
                name="Michelle"
                role="Participant"
            />
            <Comment 
                text="I keep asking myself is this a real charity and what will they do with the money? My donate app would tell you right away."
                name="George"
                role="Participant"
            />
        </Comments>
    </Container>
)

export default Quotes