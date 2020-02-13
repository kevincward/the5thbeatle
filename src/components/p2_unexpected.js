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
    width: 750px;
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
            <Title>Unexpected feedback</Title>
        </TitleContainer>
        <Comments>
            <Comment 
                text="''It’s [the flow] great, I can do this, but to be honest…I probably wouldn’t go through the whole test too often. I just want a ball park number so I can get back to baking. It’s all gotta go to the lab anyways, I want to relatively confident it’ll pass.''"
                name="Anonymous CannaChef"
                role="Participant"
            />
        </Comments>
        <br />
        <Description>
        Two other participants at the show shared this perspective. This feedback pointed out a very interesting piece we 
        had not previously considered- some users will want an idea of potency rather than an exact number because they 
        either won’t have time or desire to go through the whole process.
        </Description>
    </Container>
)

export default Quotes