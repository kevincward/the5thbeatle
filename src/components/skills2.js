import React from 'react'
import styled from 'styled-components'

import design from '../images/ic_exper_design.svg'


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

const Superbox = styled.div`
    width: 220px;
   height: 220px;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;

   &:hover Icon_bg{
    -webkit-transform: translateY(-32px) scale(6);
           transform: translateY(-32px) scale(6);
   }

`

const Container2 = styled.div`
    width: 220px;
   height: 220px;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
`

const Box = styled.div`
   position: absolute;
   width: 220px;
   height: 220px;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           justify-content: center;
   -webkit-box-align: center;
       -ms-flex-align: center;
           align-items: center;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
       -ms-flex-direction: column;
           flex-direction: column;
   border-radius: 3px;
   overflow: hidden;
   -webkit-transition: -webkit-box-shadow ease 1s;
   transition: -webkit-box-shadow ease 1s;
   transition: box-shadow ease 1s;
   transition: box-shadow ease 1s, -webkit-box-shadow ease 1s;

   &:hover {
    /*   border: 1px solid rgba(225, 227, 232, 0.18); */
    -webkit-box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
           box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
    -webkit-transition-delay: 0.32s;
           transition-delay: 0.32s;
   }
   &:after {
    opacity: 1;
   }

`
const Icon = styled.div`
    position: relative;
   margin-top: 8px;
   -webkit-transition: all 0.6s ease;
   transition: all 0.6s ease;
   -webkit-transition-delay: 0.32s;
           transition-delay: 0.32s;
   will-change: transform;
   
   &:hover {
    -webkit-transform: translateY(-48px) scale(1.4);
           transform: translateY(-48px) scale(1.4);
   }

`

const Iconbg = styled.div`
    width: 80px;
   height: 80px;
   border-radius: 100%;
   border: 1px solid rgba(225, 227, 232, 0.18);
   -webkit-box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
           box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
   background-color: #fff;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           justify-content: center;
   -webkit-box-align: center;
       -ms-flex-align: center;
           align-items: center;
   -webkit-transition: all 0.6s ease;
   transition: all 0.6s ease;
   -webkit-transition-delay: 0.32s;
           transition-delay: 0.32s;
   will-change: transform;

   &:hover {
    -webkit-transform: translateY(-32px) scale(6);
           transform: translateY(-32px) scale(6);
   }
`

const Label = styled.div`
    position: relative;

    &:hover {
                opacity: 0;
    }
`

const Text = styled.div`

position: relative;
   top: -32px;
   width: 200px;
   text-align: center;
   -webkit-transition: all 0.4s ease;
   transition: all 0.4s ease;
   -webkit-transition-delay: 0.32s;
           transition-delay: 0.32s;
           &:hover {
                opacity: 0;
                -webkit-transform: translateY(-4px) scale(.8);
                transform: translateY(-4px) scale(.8);
           }
           &:after {
            content: "Discover the attacker's tactics and purposes and find out the identity of the attacker";
            position: absolute;
            width: 170px;
            top: 111px;
            opacity: 0;
            font-size: 13px;
            color: #5d6494;
            line-height: 20px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transition-delay: 0.32s;
                    transition-delay: 0.32s;
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
                       <Label>
                       UX Research & Strategy
                       </Label>
                   </Text>
               </Superbox>
            </Content>
        </Container>
    )
}

export default Skills