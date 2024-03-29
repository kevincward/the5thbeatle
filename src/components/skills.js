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
        margin: 40px 24px;
    }
`

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 40px;
    letter-spacing: normal;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;    
    text-align: left;
    margin-left: 80px;
    width: 400px;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
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
    width: 60%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const ItemContainer = styled.div`
    width: 300px;
    margin-bottom: 32px;
    margin-right: 32px;
    @media (max-width: 768px) {
        margin-top: 32px;
        margin-bottom: 0px;
        margin-right: 0px;    
    }
`

const ImgIcon = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 18px;
    margin-bottom: 24px;
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

const ItemTitle = styled.div`
    font-size: 21px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 26px;
    letter-spacing: normal;
    color: #000000;
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
        height: 97%;
        position: absolute;
        width: 1px;
        left: 1px;
        background-color: #f7991e;
        margin-top: 32px
    }
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

const Skills = props => {

    return (
        <Container>            
            <Content>                
                {typeof window !== 'undefined'?(window.matchMedia('(max-width: 768px)').matches ?
                    <Title>
                        And have a diversified {"\n"} skill set
                    </Title>
                : null):null}
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
                            description='I work to build sustainable experiences that net more long-term engaged users rather than short term metric movers.'
                        />
                    </Row>
                </Items>
                {typeof window !== 'undefined'?(!window.matchMedia('(max-width: 768px)').matches ?
                    <Title>
                        And have a diversified {"\n"} skill set
                    </Title>
                : null): null}
            </Content>
        </Container>
    )
}

export default Skills