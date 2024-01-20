import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import  { navLinks } from '../constants'
import { logo } from '../assets' 
import { MdOutlineMenu, MdOutlineClose} from "react-icons/md";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
                <Link to="/" className='flex items-center gap-3' onClick={() => {
                    window.scrollTo(0,0)
                }}>
                    <img
                        src={logo}
                        alt="logo"
                        className='object-contain w-8 h-8'
                    />
                    <p className='text-xl font-medium text-white'>
                        Nikko Baez
                    </p>
                </Link>
                <ul className='flex-row hidden gap-12 list-none sm:flex'>
                    {navLinks.map((link) => (
                        <li key={link.id} className='text-lg font-medium text-white'>
                            <a href={`#${link.id}`}> {link.title} </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center justify-end flex-1 sm:hidden'>
                    <div className='w-fit' onClick={() => setToggle(!toggle)}>
                        {toggle ? <MdOutlineClose size={32} color="white"/> : <MdOutlineMenu size={32} color="white"/>}
                    </div>

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}>
                        <ul className='flex flex-col items-start justify-end w-full gap-8 list-none'>
                            {navLinks.map((link) => (
                                <li key={link.title} className='font-medium text-[18px] text-white' onClick={() => {
                                    setToggle(!toggle)
                                }}>
                                    <a href={`#${link.id}`}> {link.title} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar