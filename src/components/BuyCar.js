import React from "react";
import { Card } from "semantic-ui-react"
import CarCard from "./CarCard";

function BuyCar({cars}) {
    return (
        <div>
            {cars.map((car) => <CarCard key={car.id} url={car.url} car={car.car} year={car.year} championships={car.championships}/>)}
        </div>
    )
}

export default BuyCar;