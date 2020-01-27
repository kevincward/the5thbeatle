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
    font-family: Inter;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 50%;
    text-align: center;
    margin-left: 60px;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
        font-size: 32px;
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
    width: 184px;
    margin-bottom: 32px;
    @media (max-width: 768px) {
        margin-top: 32px;
        margin-bottom: 0px;
    }
`

const ImgIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 16px;
`

const ItemTitle = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333333;
    margin-bottom: 8px;
`

const ItemDescription = styled.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
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
                {window.matchMedia('(max-width: 768px)').matches ?
                    <Title>
                        My experiences have made me good at
                        these
                    </Title>
                : null}
                <Items>
                    <VerticalBar />
                    <Row>
                        <Item 
                            icon={research}
                            title='UX Research & Strategy'                            
                            description='Lead the design of tCheck’s flagship product, software experience, and e-commerce platform.'
                        />
                        <Item 
                            icon={design}
                            title='Design Thinking'                            
                            description='Lead the design of tCheck’s flagship product, software experience, and e-commerce platform.'
                        />
                    </Row>
                    <Row>
                        <Item 
                            icon={pm}
                            title='Product Management'                            
                            description='Lead the design of tCheck’s flagship product, software experience, and e-commerce platform.'
                        />
                        <Item 
                            icon={biz}
                            title='ZBusiness Growthipkick'                            
                            description='Lead the design of tCheck’s flagship product, software experience, and e-commerce platform.'
                        />
                    </Row>
                </Items>
                {!window.matchMedia('(max-width: 768px)').matches ?
                    <Title>
                        My experiences have made me good at
                        these
                    </Title>
                : null}
            </Content>
        </Container>
    )
}

export default Skills