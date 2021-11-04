import React from 'react'
import style from "./Portfolio.module.css"
import Card from './Card';
import { PortfolioData } from './PortfolioApi';

const Portfolio = () => {
    return (
        <>
          <div className={style.port_main} id="portfolio">
            <div className={style.port_head}>
              <h1>My<span>Portfolio</span></h1>
              <div className={style.port_heading}></div>
            </div>
            <div className={style.port_elm}>
              {
                PortfolioData.map((val,index)=>{
                  return <Card 
                    key={index}
                    img={val.img}
                    link={val.link}
                  />
                })
              }
            </div>
          </div>  
        </>
    )
}

export default Portfolio;
