import React from "react"

import reactlogo from "./images/reactlogo.png"

export default function Navbar(){
    return (
        <nav className="nav">
            <img 
                src={reactlogo}
                alt="React Logo"
                className="image1"
            />
            <ul>
                <li>About</li>
                <li>Pircing</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}