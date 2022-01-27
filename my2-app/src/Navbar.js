import React from "react"
//import { ReactDOM } from "react"
import logo from './images/logo.png'



export default function Navbar(){
    return (
        
        <nav>
            <img src={logo} className="image-logo" alt="logo"/>
            
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course</h4>
        </nav>    
    )
}