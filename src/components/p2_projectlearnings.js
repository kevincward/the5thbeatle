import React from 'react'
import styled from 'styled-components'
import users from '../images/ic_cannalearn_users.svg'
import diverse from '../images/ic_cannalearn_diverse.svg'
import stakes from '../images/ic_cannalearn_stake.svg'


const Container = styled.div`
    display: flex;
    margin: 20px 90px;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 100px 24px 60px;
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
    }
`

const Content = styled.div`
    display: flex;
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
    margin-bottom: 10px;
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