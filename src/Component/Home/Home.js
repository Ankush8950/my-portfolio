import React from 'react'
import Header from '../Header/Header'
import About from "../About/About"
import Navbar from "../Navbar/Navbar"
import style from "./Home.module.css"
import Education from '../Education/Education'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <>
        <div className={style.home}>
            <div className={style.nav}>
            <Navbar />
            </div>
            <div className={style.side_Com}>
            <Header />  
            <About /> 
            <Education />
            <Portfolio />
            <Contact />
            </div>
        </div>
        
        </>
    )
}

export default Home;
