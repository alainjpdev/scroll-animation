import React from "react"

export default function Joke(props){
    return(
        <div>        
            <h1 className="joke--title">{props.title}</h1>
            <h2 className="joke--text">{props.joket}</h2>
            <input placeholder="Vote 1 to 5 the joke"></input>
            <button>Vote</button>
            
            <hr/>
        </div>
        

    )
}