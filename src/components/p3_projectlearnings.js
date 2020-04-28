import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body } from '../layouts/typography'

import meetusers from '../images/ic_meetusers.svg'
import eco from '../images/ic_ecosys.svg'
import behave from '../images/ic_behave.svg'


const Container = styled.div`
    display: flex;
    margin: 40px 90px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 60px 24px 30px;
    }

    @media (max-width: 500px) {
        margin: 50px 24px 40px;
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
                        icon={meetusers}
                        title='Suggest actions to users on their terms'
                        description='Notifications and suggestions become a nuisance when not properly presented. This project enabled me to learn how to establish logic for trigger audience, placement, and frequency.'
                    />
                    <br />
                    <Item 
                        icon={eco}
                        title='Stay within the product ecosystem as much as possible'
                        description='By leveraging planned components, we were able to move quickly in getting the donor triggers launched. This also avoided adding yet another piece on users accounts.'
                    /> 
                    <br />
                    <Item 
                        icon={behave}
                        title='Greater understanding of donor behavior'
                        description='Having the opportunity to talk with so many donors gave me a better understanding into what circumstances inspire people to give.'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings