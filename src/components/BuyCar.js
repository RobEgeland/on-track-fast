import React from "react";
import CarCard from "./CarCard";

function BuyCar({cars}) {
    return (
        <div>
            {cars.map((car) => <CarCard key={car.id} safety={car.UTDSaftey} price={car.price} url={car.url} car={car.car} year={car.year} championships={car.championships}/>)}
        </div>
    )
}

export default BuyCar;