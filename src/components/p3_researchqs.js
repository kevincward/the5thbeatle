import React from 'react'
import styled from 'styled-components'
import research from '../images/ic_exper_research.svg'
import design from '../images/ic_exper_design.svg'
import pm from '../images/ic_exper_pm.svg'
import biz from '../images/ic_exper_biz.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 90px;
    @media (max-width: 768px) {
        margin: 80px 24px;
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
        font-size: 24px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const Items = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    width: 250px;
    margin-bottom: 32px;
    margin-right: 32px;
    @media (max-width: 768px) {
        margin-top: 32px;
        margin-bottom: 0px;
        margin-right: 0px;
    }
`

const ItemTitle = styled.div`

    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const VerticalBar = styled.div`
    @media (max-width: 768px) {
        height: 95%;
        position: absolute;
        width: 1px;
        left: 20px;
        background-color: #f7991e;
        margin-top: 32px
    }
`

const Item = ({title, description}) => {
    return (
        <ItemContainer>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>                
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </ItemContainer>
    )
}

const ResearchQs = props => {

    return (
        <Container>  
            <Title>
                Questions for user testing
                </Title>          
            <Content>                
                <Items>
                    <VerticalBar />
                    <Row>
                        <Item 
                            title='UX Research & Strategy'                            
                            description='I work closely with users to understand their needs, pain points, and wants in order to generate usable products that solve real problems.'
                        />
                        <Item 
                            icon={design}
                            title='Design Thinking'                            
                            description='I implement an iterative process to uncover new outlooks and redefine problems in an attempt to identify alternative strategies and solutions.'
                        />
                    </Row>
                    <Row>
                        <Item 
                            icon={pm}
                            title='Product Management'                            
                            description='Incorporating product thinking and UX workflow with the development process, I see products from problem discovery to launch and onward.'
                        />
                        <Item 
                            icon={biz}
                            title='Business Growth'                            
                            description='I work to build sustainable experiences that net more long-term engaged users rahter than short term metric movers.'
                        />
                    </Row>
                    <Row>
                        <Item 
                            icon={research}
                            title='UX Research & Strategy'                            
                            description='I work closely with users to understand their needs, pain points, and wants in order to generate usable products that solve real problems.'
                        />
                        <Item 
                            icon={design}
                            title='Design Thinking'                            
                            description='I implement an iterative process to uncover new outlooks and redefine problems in an attempt to identify alternative strategies and solutions.'
                        />
                    </Row>
                </Items>
                <Items>
                    <VerticalBar />
                    <Row>
                        <Item 
                            icon={research}
                            title='UX Research & Strategy'                            
                            description='I work closely with users to understand their needs, pain points, and wants in order to generate usable products that solve real problems.'
                        />
                        <Item 
                            icon={design}
                            title='Design Thinking'                            
                            description='I implement an iterative process to uncover new outlooks and redefine problems in an attempt to identify alternative strategies and solutions.'
                        />
                    </Row>
                    <Row>
                        <Item 
                            icon={pm}
                            title='Product Management'                            
                            description='Incorporating product thinking and UX workflow with the development process, I see products from problem discovery to launch and onward.'
                        />
                        <Item 
                            icon={biz}
                            title='Business Growth'                            
                            description='I work to build sustainable experiences that net more long-term engaged users rahter than short term metric movers.'
                        />
                    </Row>
                    <Row>
                        <Item 
                            icon={research}
                            title='UX Research & Strategy'                            
                            description='I work closely with users to understand their needs, pain points, and wants in order to generate usable products that solve real problems.'
                        />
                        <Item 
                            icon={design}
                            title='Design Thinking'                            
                            description='I implement an iterative process to uncover new outlooks and redefine problems in an attempt to identify alternative strategies and solutions.'
                        />
                    </Row>
                </Items>
            </Content>
        </Container>
    )
}

export default ResearchQs