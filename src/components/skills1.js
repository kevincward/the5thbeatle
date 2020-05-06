import React from 'react'
import styled from 'styled-components'
import './skills.css'

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

const Content = styled.div`
    display: flex;
    flex-direction: row;    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`



const Skills = () => {

    return (
        <Container>            
            <Content>                
               <Superbox>
                   <Container2>
                       <Box>
                           <Iconbg>
                           <Icon src={design} />
                           </Iconbg>
                       </Box>
                   </Container2>
                   <Text>
                       <Title>
                       UX Research & Strategy
                       </Title>
                   </Text>
               </Superbox>
            </Content>
        </Container>
    )
}

export default Skills