import React from 'react'
import { Link } from 'gatsby'
import './header.css'
import logo from '../images/logo.svg'


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    if(typeof window !== 'undefined')
      window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = typeof window !== 'undefined'?window.pageYOffset:0;

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
          <Link to="/"><img src={logo} width="40" /></Link>
          <Link to="/">Work</Link>
          <Link to="/about">About</Link>
          <a href="https://drive.google.com/file/d/1N1IttPv_fevsnSUZ5rXSlU0xVCEWgntp/view?usp=sharing" target='blank'>Resume</a>
          <a href="mailto:kevinis@the5thbeatle.com"><button>Let's Jam</button></a>
        </div>  
      </div>
    )
  }
}

export default Header
