import React from "react"
import display from "./images/display.png"

export default function Main(){
    return (
        <div>
            <section class="hero">
                <img src={display} className="hero-photo" alt=""/>
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities 
                led by one-of-a-kind hosts-all without leaving home</p>
            </section>
        </div>
    )
}