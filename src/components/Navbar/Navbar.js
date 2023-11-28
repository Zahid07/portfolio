import React, { useState } from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import {images} from '../../constants'
import './Navbar.scss'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)


  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
            <ul className='app__navbar-links'>
                { 
                ['home', 'about', 'work', 'skills', 'contact'].map((item)=>(
                    <li className='app__flex p-text' key= {`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                )  )
                
                }
            </ul>                
    </nav>
  );
};

export default Navbar