import React from 'react'
import styled from 'styled-components'
import { Header6, Lead, Body } from '../layouts/typography'

import diff from '../images/ic_learndonate_diff.svg'
import native from '../images/ic_learndonate_native.svg'


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
                        icon={diff}
                        title='Donating is very similar to any other kind of payment activity'
                        description='Donors take comfort in well known brands and identify with logos.  They will shop around to find the right organization to send money to. They are concerned about making a secure transaction and confirming their money is well spent.'
                    />
                    <br />
                    <Item 
                        icon={native}
                        title='Evaluating the value of a native experience'
                        description='With our personas and features established, I created an information architecture and screen wireframes, leveraging components from the current app design for consistency. Once approved by the Product and Engineering teams, we began to conduct usability tests with the low fidelity mockups.'
                    /> 
                    
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings