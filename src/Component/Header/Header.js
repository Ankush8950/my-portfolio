import React,{ useState } from 'react'
import style from "./Header.module.css"
import { BsPersonFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import Navbar from "../Navbar/Navbar"
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-scroll';


const Header = () => {
  const [hamberger, setHamberger] = useState(false);
  const [hover , setHover ] = useState(false);

    const onHover = () => {
      setHover(!hover)
    }

    const hambergers = hamberger ? style.hamberger_show_data : style.hamberger_hide_data;

    const closeMobileMenu = () => setHamberger(false);

    return (
        <>
        <div className={hambergers}>  
           <Navbar  isMobile={true} closeMobileMenu={closeMobileMenu} />
        </div>
          <div className={style.header} id="header" >
            <div className={style.elm}>
              <h1 className={style.head1}>HI THERE !</h1>
              <h1 className={style.head}>I'M Ankush kumar</h1>
              <p className={style.para}>I'm a developer not because I want more money,<br/>
                I'm a developer because I love creating new things.</p>
              <div className={style.btn}>
              <Link to="about"><button  className={style.btn_btn} onMouseEnter={onHover} onMouseLeave={onHover} >About me <span>{hover ? <BsArrowRightShort /> : <BsPersonFill />}</span>
             </button></Link>
              </div>
            </div>
            <div className={style.hambergerBtn} onClick={()=>setHamberger(!hamberger)}>
                { hamberger ? <RiCloseFill/>  :  <CgMenuRightAlt />}
            </div>
            {/* <div className={style.closeBtn} onClick={()=>setHamberger(!hamberger)} >
              { <RiCloseFill/>  }
            </div> */}
          </div>  
        </>
    )
}

export default Header;
