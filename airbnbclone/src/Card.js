import React from "react"

export default function Card(props){
//    let badgeText;
  //  if(props.openSpots === 0){
    //    badgeText = "SOLDOUT"
    //} else if(props.location === "Online"){
      //  badgeText = "ONLINE"
    //}

    return (
        <div className="card">
            <img src={props.coverImg} alt="" className="card--photo"/>
            <div className="card--stats">
                <img src={props.star} alt="" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.stats.reviewCount}) *  </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p> 
            <p><span className="bold">From ${props.price}</span>/ person</p>       
        </div>
    )
}