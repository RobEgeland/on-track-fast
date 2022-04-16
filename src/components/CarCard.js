import React from "react";

function CarCard({url, car, year, championships}) {
    let champs = championships.join(', ')
    return(
        <div>
            <img src={url}></img>
            <h1>{car}</h1>
            <h2>{year}</h2>
            <p>Championships won: {champs}</p>
        </div>
    )
}

export default CarCard;