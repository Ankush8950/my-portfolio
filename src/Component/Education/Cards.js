import React from 'react'
import style from "./Cards.module.css"
import { FcGraduationCap } from "react-icons/fc";

const Cards = (props) => {
    return (
        <>
          <div className={style.main_cards}>
            <div className={style.Cards_elm}>
                <div className={style.Cards_icons}>
                    <FcGraduationCap />
                </div>
                <div className={style.Cards_line}></div>
            </div>
            <div className={style.Cards_details}>
                <div className={style.years_details}>
                    <h1>{props.years}</h1>
                </div>
                <div className={style.Edu_details}>
                    <h1>{props.title}</h1>
                    <p>{props.details}</p>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Cards
