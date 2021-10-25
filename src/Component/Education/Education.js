import React from 'react'
import style from "./Education.module.css"
import Cards from './Cards'
import { Educationdata } from './Educationapi'

const Education = () => {
    return (
        <>
            <div className={style.edu_main} id="education">
            <div className={style.edu_main_head}>
            <h1>My <span>Education</span></h1>
            <div className={style.heaing_line}></div> 
            </div>
                <div className={style.edu_card}>
                    {
                      Educationdata.map((val ,index)=>{
                          return <Cards 
                              key={index}
                              years={val.year}
                              title={val.title}
                              details={val.details}
                          />
                      })  
                    }
                </div>
            </div>  
        </>
    )
}

export default Education;
