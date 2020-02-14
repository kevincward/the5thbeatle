import React from 'react'
import styled from 'styled-components'
import users from '../images/ic_cannalearn_users.svg'
import diverse from '../images/ic_cannalearn_diverse.svg'
import stakes from '../images/ic_cannalearn_stake.svg'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 300px 24px 60px;
    }
`

const Title = styled.div`
    width: 565px;

    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 34px;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 32px;
    }
`


const Content = styled.div`
    display: flex;
    font-size: 32px;
    flex-direction: row;
    padding: 20px 0px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 75%;
    margin-right: 10%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
`

const ImgIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 18px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
        margin-right: 14px;
    }
`

const ItemTitle = styled.div`
    object-fit: contain;

    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 26px;
    letter-spacing: normal;
    color: #000000;
`

const ItemDescription = styled.div`

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.7);
`

const ItemContent = styled.div`
    
`
const Item = ({icon, title, description}) => {
    return (
        <ItemContainer>
            <ImgIcon src={icon} />
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const ProjectLearnings = () => {    

    return (
        <Container>
            <Title>
            Project learnings
            </Title>
            
            <Content>
                <Items>
                    <Item 
                        icon={users}
                        title='Meet users where they are'
                        description='Some users are willing to for go the most accurate testing if they can save time and effort.'
                    />
                    <br />
                    <Item 
                        icon={diverse}
                        title='Diversify your testing participants'
                        description='Only by speaking with a cannabis chef in their element (they were actually baking edibles as we shared the prototype with them), were we able to discover the need to provide a more time sensitive solution.'
                    /> 
                    <br />
                    <Item 
                        icon={stakes}
                        title='All stakeholders feedback is valuable'
                        description='Having a workshop with people from all different fields providing different kinds of feedback really helped to shape the final product.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings