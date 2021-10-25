import React from 'react'
import cardStyle from "./Card.module.css"
import { Link } from "react-scroll"


const Card = (props) => {
    return (
        <>
          <div className={cardStyle.Card}>
            <img  src={props.img} className={cardStyle.port_image} alt="portfolio_image"/>
            <div className={cardStyle.cardHov_btn}>
                <a href="https://ankush8950.github.io/react-pages/" ><button>source code</button></a>
            </div>
          </div>  
        </>
    )
}

export default Card;
