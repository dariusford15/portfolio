import React from 'react'
import {NavLink} from 'react-router-dom';


export default function Header() {
    const navbar = [
        {
            title: "Home",
            path: "/home"
        },
        {   
            title: "Projects",
            path: "/projects"

        },
        {
            title: "About",
            path: "/about"

        },
        {
            title: "Skills",
            path: "/skills"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
  return (
    <div className = "flex justify-end items-center h-12 space-x-5 bg-sky-400">
        {navbar.map((item)=> {
            return(
            <div>
                
                <NavLink to={`${item.path}`} activeClassName={"active"} >{item.title}</NavLink>
        
            </div>
            )
        })}
    </div>
  )
}
