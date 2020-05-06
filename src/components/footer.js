import React from 'react'
import styled from 'styled-components'

import dribbble from '../images/dribbble.svg';
import instagram from '../images/instagram.svg';
import linkedIn from '../images/linkedin.svg';
import spotify from '../images/spotify.svg';
import github from '../images/github.svg';
import bkgd from '../images/footerbkgd.svg'

const Container = styled.div`
    background: url(${({ heroImgURL }) => heroImgURL});
    background-size: cover;
    height: 20rem;
    display: flex;
    padding: 50px 90px;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 30px 30px;
        height: 25rem;
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

const Item = styled.div`
    margin: 22px 0px;
    width: 45%;
    margin-right: 10%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const Title = styled.div`
  width: 400px;
  color: #FFFFFF;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5rem;
  letter-spacing: normal;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`

const Tag = styled.div`
    background: rgb(0,0,0,0.4);
    width: 110px;
    padding: 4px 6px;
    margin: 10px 0px;
    font-size: 14px;
    text-align: center;
    border: none;    
    font-weight: 500;
    color: #FFFFFF;
    border-radius: 8px;
    outline: none;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Caption = styled.div`
    margin: 10px 0px;
    font-size: 14px;
    border: none;    
    font-weight: 500;
    color: #FFFFFF;
    border-radius: 8px;
    outline: none;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Text = styled.div`
  color: rgb(255,255,255,0.9);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: normal;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`

const Link = styled.a`
    color: #FFFFFF;    
    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
    padding-bottom: 4px;
    z-index: 1;
    display: inline-block;
    position: relative;

    
    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: .07em;
    height: .1em;
    width: 100%;
    background: linear-gradient(110deg, #FFD23E, #F7991E, #EF4266, #0FAD69, #3BCEAC);
    z-index: -1;
    transition: height .25s cubic-bezier(.6,0,.4,1);
}

    &:hover::after {
    height: .5em;
}

`

const SocialsContainer = styled.div`
	display: flex;
    margin: 0 auto;
    width: 300px;
    justify-content: space-around;

    @media (max-width: 768px) {    
        padding-top: 40px;
    }
`

const SocialImage = styled.img`
	width: 24px;
    height: 24px;
    
    &:hover {
        opacity: 0.6;
    }
`

const Footer = () => {

    return (
      <Container heroImgURL={bkgd}>
        <Content>
            <Item>
                <Title>
                    All you need is love, <br />and good product design.
                </Title>
                <Caption>
                18 products shipped and counting   
                </Caption>
            </Item>
        </Content>
        <Content>
            <Item>
                <Tag>
                Available for hire
                </Tag>
                <Text>
                    <Link href="mailto:kevinis@the5thbeatle.com">kevinis@the5thbeatle.com</Link>
                </Text>  
            </Item>
            <SocialsContainer>
                    <a
                    alt="Linkedin"
                    href="https://www.linkedin.com/in/kcwdesigner"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={linkedIn} />
                    </a>
                    <a
                    alt="Instagram"
                    href="https://www.instagram.com/wheresmycanvas/"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={instagram} />
                    </a>
                    <a
                    alt="Dribbble"
                    href="https://dribbble.com/kevincward"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={dribbble} />
                    </a>
                    <a
                    alt="Github"
                    href="https://github.com/kevincward"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={github} />
                    </a>
                    <a
                    alt="Spotify"
                    href="https://open.spotify.com/playlist/01xUdZEaNRvGNam15QJUP0?si=d6nn8RrFSieXS78lgK-E5A"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={spotify} />
                    </a>
            </SocialsContainer>
            
        </Content>

                
          
        
      </Container>
    
)

}


export default Footer