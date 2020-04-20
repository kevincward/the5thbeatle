import React from 'react'
import styled from 'styled-components'

import dribbble from '../images/dribbble.svg';
import instagram from '../images/instagram.svg';
import linkedIn from '../images/linkedin.svg';
import spotify from '../images/spotify.svg';

const Container = styled.div`
    background-color: #540D6E;
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

const Copyright = styled.div`
  color: rgb(255,255,255,0.9);
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3125rem;
  letter-spacing: normal;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 768px) {    
    text-align: center;
    }
`

const Link = styled.a`
    color: #FFFFFF;    
    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }

`

const SocialsContainer = styled.div`
	display: flex;
    margin: 0 auto;
    padding: 20px;
    width: 300px;
    justify-content: space-around;

    @media (max-width: 768px) {    
        padding-top: 40px;
    }
`

const SocialImage = styled.img`
	width: 24px;
    height: 24px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.3, 1.3);
        transition-timing-function: ease-in;
        transition: 1s;
    }
`

const Footer = () => {

    return (
      <Container>
        <Content>
            <Item>
                <Title>
                    All you need is love, <br />and good product design.
                </Title>
            </Item>
        </Content>
        <Content>
            <Item>
                <Text>
                Lets talk.
                </Text>
                <Text>
                    <Link href="mailto:kevinis@the5thbeatle.com">kevinis@the5thbeatle.com</Link>
                </Text>  
            </Item>
            <SocialsContainer>
                 <a
                    alt="Dribbble"
                    href="https://dribbble.com/kevincward"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={dribbble} />
                    </a>
                    <a
                    alt="Instagram"
                    href="https://www.instagram.com/wheresmycanvas/"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={instagram} />
                    </a>
                    <a
                    alt="Linkedin"
                    href="https://www.linkedin.com/in/kcwdesigner"
                    target="_blank"
                    rel="noopener">
                    <SocialImage src={linkedIn} />
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

                <Copyright>
                    Made with ⚛️ in 2020.
                </Copyright>
          
        
      </Container>
    
)

}


export default Footer