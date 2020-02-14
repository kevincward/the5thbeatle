import React from 'react'
import styled from 'styled-components'

import dribbble from '../images/dribbble.svg';
import instagram from '../images/instagram.svg';
import linkedIn from '../images/linkedin.svg';
import spotify from '../images/spotify.svg';

const Container = styled.div`
    height: 100%;
`

const FooterGroup = styled.div`
    background: #540D6E;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    justify-items: center;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const Title = styled.p`    
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 26px;
    letter-spacing: normal;
    color: #FFFFFF;
    text-align: center;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 500px) {
        max-width: 350px;
    };
`

const Text = styled.p`    
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 500px) {
        max-width: 300px;
    };
`


const Copyright = styled.div`
    color: #FFFFFF;    
    font-size: 13px;
    max-width: 540px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

`

const Link = styled.a`
    color: #FFFFFF;    
    font-size: 21px;
    font-weight: 700;
    line-height: 26px;
`
const SocialsContainer = styled.div`
	display: flex;
    margin: 0 auto;
    padding: 20px;
    width: 300px;
    justify-content: space-around;
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

const Footer = ({data, children}) => (
    <Container>
      <FooterGroup>
        <Title>There's nowhere you can be that isn't where you're meant to be...</Title>
        
        <Text>
        Thanks for scrolling all the way to the bottom. Want to work together or to say hello, hello?
        <br />
        <br />
        <Link href="mailto:kevinis@the5thbeatle.com">kevinis@the5thbeatle.com</Link>
        </Text>
        
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

        <Copyright>{children}</Copyright>
      </FooterGroup>
    </Container>
)

export default Footer