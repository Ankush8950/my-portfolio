import React from 'react'
import styleCard from "./Card.module.css"

const Card = (props) => {
    return (
        <>
              <div className={styleCard.elm}>
                <div className={styleCard.Card_elm}>
                <h1 className={styleCard.head}>{props.title}</h1>
                <p className={styleCard.para}>{props.details}</p>
                </div>
              </div>  
        </>
    )
}

export default Card;
