import React  from 'react'
import styles from "./About.module.css"
import { Experience } from "./Card/Cardapi"
import Card from "./Card/Card"
import { HiDownload } from "react-icons/hi";
import pdf from "../pdf/Ankush Kumar.pdf"

const About = () => {
  
    return (
        <>
           <div className={styles.about} id="about" >
            <div className={styles.head}>
             <h1>About<span>Me</span></h1>
             <div className={styles.header_line}></div>
            </div>

            <div className={styles.contaier}>
               <div className={styles.details}>
                    <h1 className={styles.data}>Name:<span className={styles.data_pro}>Ankush kumar</span></h1>
                    <h1 className={styles.data}>Age:<span className={styles.data_pro}>22</span></h1>
                    <h1 className={styles.data}>Qualification:<span className={styles.data_pro}>B-tech(CSE)</span></h1>
                    <h1 className={styles.data}>post:<span className={styles.data_pro}>Front End Developer</span></h1>
                    <h1 className={styles.data}>Language:<span className={styles.data_pro}>Hindi</span> ,<span className={styles.data_pro}>English</span></h1>
                    <button className={styles.button}><a href={pdf}> Download CV <span><HiDownload /></span></a></button>
               </div> 
{/* card data */}
               <div className={styles.experi_data}>
                 <div className={styles.exper_data}>
                 {
                    Experience.map((val,index)=>{
                        return <Card
                            key={index}
                            title={val.title}
                            details={val.details}
                        />
                    })
                  }  
                 </div>
               </div>
            </div>
            </div> 
        </>
    )
}

export default About;
