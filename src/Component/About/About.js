import React ,{ useState } from 'react'
import styles from "./About.module.css"
import { Experience } from "./Card/Cardapi"
import Card from "./Card/Card"
import { HiDownload } from "react-icons/hi";
import img from '../image/beauti.png'

const About = () => {
    const [open, setOpen] = useState("hello");

    const openPDf = () => {
        setOpen(!open);
    }

    return (
        <>
           <div className={styles.about} id="about" >
            <div className={styles.head}>
             <h1>About<span>Me</span></h1>
             <div className={styles.header_line}></div>
            </div>

            <div className={styles.contaier}>
               <div className={styles.details}>
                    <h1>Name:<span>Ankush kumar</span></h1>
                    <h1>Age:<span>20</span></h1>
                    <h1>Qualification:<span>B-tech(CSE)</span></h1>
                    <h1>post:<span>Front End Developer</span></h1>
                    <h1>Language:<span>Hindi</span> ,<span>English</span></h1>
                    {/* <button className={styles.button}> Download CV <span><HiDownload /></span></button> */}
               </div> 

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
