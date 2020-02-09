import React from 'react'
import styled from 'styled-components'
import diff from '../images/ic_learndonate_diff.svg'
import native from '../images/ic_learndonate_native.svg'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 120px 24px 60px;
    }
`

const Title = styled.div`
    width: 565px;

    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
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
    margin-bottom: 6px;
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
const Item = ({ description}) => {
    return (
        <ItemContainer>
            
            <ItemContent>
                
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const ProjectLearnings = () => {    

    return (
        <Container>
            <Title>
            Open questions for this feature
            </Title>
            
            <Content>
                <Items>
                    <Item 
                        description='1. Who exactly should see these notifications?'
                    />
                    
                    <Item 
                        description='2. How often should a user see the notification?'
                    /> 
                    
                    <Item 
                        description='3. How often should a user see the notification?'
                    /> 
                </Items>
            </Content>
        </Container>
    )
}
export default ProjectLearnings