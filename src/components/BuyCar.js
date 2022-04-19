import React from "react";
import CarCard from "./CarCard";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function BuyCar({cars}) {

    

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                {cars.map((car) => <CarCard key={car.id} safety={car.UTDSaftey} price={car.price} url={car.url} car={car.car} year={car.year} championships={car.championships}/>)}
            </Grid>
        </Grid>
    )
}

export default BuyCar;