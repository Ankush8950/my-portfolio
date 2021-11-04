import React from 'react'
import cardStyle from "./Card.module.css"


const Card = (props) => {
    return (
        <>
          <div className={cardStyle.Card}>
            <img  src={props.img} className={cardStyle.port_image} alt="portfolio_image"/>
            <div className={cardStyle.cardHov_btn}>
                <a href={props.link} ><button>source code</button></a>
            </div>
          </div>  
        </>
    )
}

export default Card;
