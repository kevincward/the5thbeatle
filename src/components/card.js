import React from 'react'
import './Card.css'
import { Link } from 'gatsby'


const Card = props => (
    <Link to={`/` + props.url}>
        <div className="Card">
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <a>{props.link}</a>
            
        </div>
    </Link>
)

export default Card