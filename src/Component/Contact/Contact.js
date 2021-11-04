import React from 'react'
import style from "./Contact.module.css"
import { HiOutlineMail } from "react-icons/hi";
import { VscCallIncoming } from "react-icons/vsc";
import { BiMap } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";



const Contact = () => {
    return (
        <>
          <div className={style.cont_div} id="contact">
            <div className={style.cont_head}>
              <h1>Contact<span>Me</span></h1>
              <div className={style.port_heading}></div>
            </div>

            <div className={style.cont_elm}>
              <div className={style.cont_details}>
                <h2>Contact Info</h2>
                <h3 className={style.heading}><HiOutlineMail /> <span className={style.headin} >ankushku72@gmail.com</span> </h3>
                <h3 className={style.heading}><VscCallIncoming /><span className={ style.headin} >7282088791</span></h3>
                <h3 className={style.heading}><BiMap /><span className={ style.headin} >Bhopal Madhya Pradesh</span></h3>
              </div>
              <div className={style.input_from}>
                  <form className={style.from_cont}  >
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Project Name" />
                    <textarea type="text" placeholder="Message"/>
                    <button className={style.Cont_btn}>Send me <span><RiSendPlaneFill /></span> </button>

                  </form>
              </div>
            </div>
          </div>
        </>
    )
}

export default Contact;
