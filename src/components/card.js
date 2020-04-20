import React from 'react'
import './Card.css'
import { Link } from 'gatsby'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const ArrowIcon = styled(FontAwesomeIcon)`
  transition: all 300ms 0s ease;
  position: relative;
  top: 1px;
  margin-left: 2px;
  color: #540d6e;

  .card-link:hover & {
    transform: translateX(4px);
  }
`

const Card = props => (
    <Link to={`/` + props.url}>
        <div className="Card">            
            <h3>{props.title}</h3>
            <div>
                <p>{props.text}</p>
                <div className="horizontal-line"></div>
            </div>
            <a class="card-link">{props.link} <ArrowIcon icon={faLongArrowAltRight} /></a>
            
        </div>
    </Link>
)

export default Card