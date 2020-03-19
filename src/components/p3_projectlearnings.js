import React from 'react'
import styled from 'styled-components'
import meetusers from '../images/ic_meetusers.svg'
import eco from '../images/ic_ecosys.svg'
import behave from '../images/ic_behave.svg'


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
        margin-top: 40px;
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
    line-height: 28px;
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