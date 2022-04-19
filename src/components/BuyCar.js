import React from "react";
import CarCard from "./CarCard";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function BuyCar({cars}) {

    

    return (
        <>
            <h1 className="buycar">Buy a Car!</h1>
            <Grid container spacing={4}>
                    {cars.map((car) => {
                        return (
                            <Grid item xs={4}>
                                <CarCard key={car.id} safety={car.UTDSaftey} price={car.price} url={car.url} car={car.car} year={car.year} championships={car.championships}/>
                            </Grid>
                        )
                    })}
            </Grid>
        </>
    )
}

export default BuyCar;