import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen);
    }
    function closeMenu(){
        setIsOpen(false);
    }

  return (
    <div className={'relative bg-black flex justify-between items-center h-24 border-b-2 border-sky-400 z-20'}>
    <h1 className={'text-white ml-3 text-2xl underline font-serif'}><Link to="/">Portfolio</Link></h1>
    <nav className={'flex'}>
        {/* Mobile Navigation Icon */}
        <button className="text-white block md:hidden" onClick={toggleMenu}>{isOpen ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}</button>
        {/* Mobile Navigation Links */}
      {isOpen && (
      <div className={'lg:hidden fixed top-0 left-0 w-2/3 h-full ease-in-out duration-700'}>
        <h1 className={'text-white ml-4 text-2xl underline font-serif bg-black'}><Link to="/">Portfolio</Link></h1>
        <ul className={'uppercase p-4 bg-black list-none'}>
        <li onClick={closeMenu} className={'no-underline text-white text-lg p-4 border-b border-gray-500'}><NavLink to="/">Home</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-4 border-b border-gray-500'}><NavLink to="/about">About</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-4 border-b border-gray-500'}><NavLink to="/projects">Projects</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-4 border-b border-gray-500'}><NavLink to="/skills">Skills</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-4'}><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>)}

      <div className={'lg-flex justify-between items-center'}>
        <ul className={'md:flex hidden'}>
        <li onClick={closeMenu} className={'no-underline text-white text-lg p-2'}><NavLink to="/" exact activeClassName='active'>Home</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-2'}><NavLink to="/about" activeClassName='active'>About</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-2'}><NavLink to="/projects" activeClassName='active'>Projects</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-2'}><NavLink to="/skills" activeClassName='active'>Skills</NavLink></li>
        <li onClick={closeMenu}className={'no-underline text-white text-lg p-2'}><NavLink to="/contact" activeClassName='active'>Contact</NavLink></li>
      </ul>
      </div>
    </nav>

    </div>
  )
}

export default Navbar