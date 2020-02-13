import React from 'react'
import styled from 'styled-components'
import p2_testsuc_1 from '../images/p2_testsuc_1.png'
import p2_testsuc_2 from '../images/p2_testsuc_2.png'
import p2_testsuc_3 from '../images/p2_testsuc_3.png'
import p2_testsuc_4 from '../images/p2_testsuc_4.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 36px 46px;    
    @media (max-width: 720px) {
        padding: 32px 23px;
        flex-direction: column;
        align-items: center;
    }
`

const Content = styled.div`  
    background-color: #f8f8f8;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 720px) {
        padding: 16px 0px;
    }
`

const Header = styled.div`
    font-size: 34px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #1a1a1a;
    margin-bottom: 34px;
    @media (max-width: 720px) {
        margin-bottom: 16px;
        font-size: 24px;
        line-height: 1.33;
        letter-spacing: normal;
        color: #000000;
    }
`

const ItemContainer = styled.div`  
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    width: 270px;
    padding: 32px 0px;
    @media (max-width: 720px) {
        padding: 16px 0px;
        width: 100%;
    }
`

const Row = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Img = styled.img`  
    width: 100%;
    height: auto;
    @media (max-width: 720px) {
        width: 131px;
        margin: auto;
    }
`

const Text = styled.div`  
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: -0.5px;
    text-align: center;
    color: #1a1a1a;
    margin-top: 23px;
    @media (max-width: 720px) {
        width: 271px;
        margin: auto;
        margin-top: 32px;
    }
`

const items = [
    [
        {
            img: p2_testsuc_1,
            text: "Prepare for the test: tutorial video, process strategy, supplies list"
        },
        {
            img: p2_testsuc_2,
            text: "Timers to keep track of infusion process"
        },
    ],
    [
        {
            img: p2_testsuc_3,
            text: "Step by step instruction with visuals"
        },
        {
            img: p2_testsuc_4,
            text: "Associate strain with a name instead of another number"
        },
    ]
]

const Item = ({img, text}) => {
    return (
        <ItemContainer>
            <Img src={img} />
            <Text>{text}</Text>
        </ItemContainer>
    )
}

const p2_testingsuccess = () => (
    <Container>
        <Header>
            Ensuring testing success
        </Header>
        <Content>
            {
                items.map((row, index) => (
                    <Row key={index}>
                        {row.map((item, itemIndex) => {
                            return (
                                <Item 
                                    key={itemIndex}
                                    img={item.img}
                                    text={item.text}
                                />
                            )
                        })}
                    </Row>
                ))
            }
        </Content>
    </Container>
)

export default p2_testingsuccess