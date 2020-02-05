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
    typeof window !== 'undefined'? window.addEventListener('scroll', this.handleScroll):null;
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
          <Link to="/about">About</Link>
          <a href="https://drive.google.com/file/d/18i66J7t1LTAruuSBzTdcmrMyLpCbIPSk/view?usp=sharing" target='blank'>Resume</a>
          <a href="mailto:webmaster@example.com"><button>Contact me</button></a>
        </div>  
      </div>
    )
  }
}

export default Header
