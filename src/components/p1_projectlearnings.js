import React from 'react'
import styled from 'styled-components'
import diff from '../images/ic_learndonate_diff.svg'
import native from '../images/ic_learndonate_native.svg'


const Container = styled.div`
    display: flex;
    margin: 80px 90px;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin: 360px 24px 60px;
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
    padding-bottom: 10px;
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