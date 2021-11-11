import React from 'react'
import cardStyle from "./Card.module.css"


const Card = ({img,link,link2}) => {
    return (
        <>
          <div className={cardStyle.Card}>
            <img  src={img} className={cardStyle.port_image} alt="portfolio_image"/>
            <div className={cardStyle.cardHov_btn}>
                <a href={link} ><button>View page</button></a>
                <a href={link2} ><button>Source code</button></a>
            </div>
          </div>  
        </>
    )
}

export default Card;
