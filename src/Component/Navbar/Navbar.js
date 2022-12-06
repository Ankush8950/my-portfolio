import React from 'react'
// import { Link } from 'react-router-dom';
import style from "./Navbar.module.css"
import { Link } from "react-scroll"
import pro from "../image/personal.jpeg"
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import {SiHashnode} from "react-icons/si"



const Navbar = (props) => {
    return (
        <>
           <div className={style.nav}>
           <div className={style.nav_div}>
            <div className={style.user}>
               <div className={style.ima_data}>
                <img src={pro} className={style.img} alt="images" />
               </div>
               <h1>Ankush kumar</h1>
               <p>Front End Developer</p>
            </div>  

            <div className={style.link}>
                <ul>
                    <li>
                        <Link 
                        onClick={()=> props.isMobile && props.closeMobileMenu()}
                         activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <button>Home</button>
                        </Link>
                    </li>

                    <li >
                    <Link 
                    onClick={()=> props.isMobile && props.closeMobileMenu()}
                         activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <button>About</button>
                           
                        </Link>
                    </li>

                    <li >
                        <Link 
                        onClick={()=> props.isMobile && props.closeMobileMenu()}
                         activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <button>Education</button>
                           
                        </Link>
                    </li>
                    <li >
                        <Link
                        onClick={()=> props.isMobile && props.closeMobileMenu()}
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <button>portfolio</button>
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={()=> props.isMobile && props.closeMobileMenu()}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <button>contact</button>
                        </Link>
                    </li>
                </ul>
            </div> 
            <div className={style.Social_icon}>
                <div className={style.Social_icons}>
                <a href="https://github.com/Ankush8950" ><AiOutlineGithub /></a>
                </div>
                <div className={style.Social_icons}>
                <a href="https://www.instagram.com/ankushkumar7282/" ><FaInstagram /></a>
                </div>
                <div className={style.Social_icons}>
                <a href="https://www.linkedin.com/in/ankush-kumar-275129176/"  ><FaLinkedin /></a>
                </div>
                <div className={style.Social_icons}>
                <a href="https://hashnode.com/@Ankush8950 " ><SiHashnode /></a>
                </div>
            </div>
           </div>
           </div> 
        </>
    )
}

export default Navbar;
