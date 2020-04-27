import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body } from '../layouts/typography'

import users from '../images/ic_cannalearn_users.svg'
import diverse from '../images/ic_cannalearn_diverse.svg'
import stakes from '../images/ic_cannalearn_stake.svg'


const Container = styled.div`
    display: flex;
    margin: 40px 90px 80px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 60px 24px 30px;
    }

    @media (max-width: 500px) {
        margin: 40px 24px 40px;
    }
`

const Title = styled(Header6)`  
    width: 1000px;
    margin-top: 0px;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 32px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 0px;
    width: 1000px;
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const Items = styled.div`
    margin: 22px 0px;
    width: 85%;
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
        margin-right: 14px;
    }
`

const ItemTitle = styled(Lead)`
    margin-top: 0px;
    margin-bottom: 10px;
    object-fit: contain;
`

const ItemDescription = styled(Body)`
color: rgba(0, 0, 0, 0.7);
margin-top: 0px;
margin-bottom: 0px;
`

const ItemContent = styled.div`
    width: 100%;   
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
                        description='Some users are willing to forgo the most accurate testing if they can save time and effort.'
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
                        description='Inclusion of stakeholders from different orgs across tCheck was critical to the workshop’s success. Their diverse perspectives helped us to obtain robust feedback which shaped the final product.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings