import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import logo from '../images/logo.svg'

import { maxWidth, sizes } from "../layouts/Layout"


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  
  render () {
    return (
      <div className={this.state.hasScrolled ?
        'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/About">About</Link>
          <a href="https://drive.google.com/file/d/18i66J7t1LTAruuSBzTdcmrMyLpCbIPSk/view?usp=sharing" target='blank'>Resume</a>
          <a href="mailto:webmaster@example.com"><button>Contact me</button></a>
        </div>  
      </div>
    )
  }
}

export default Header
