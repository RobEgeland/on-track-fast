import React from "react";
import Card from "@mui/material/Card"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



function CarCard({url, car, year, championships, price, safety}) {
    let champs = championships.join(', ')
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={8}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                            alt={car}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {car}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {year}
                            </Typography>
                            <Typography variant="body2">
                                Up to date saftey equipment: {safety ? "Yes" : "No"}
                            </Typography>
                            <Typography variant="body2">
                                Championships won: {champs}
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                                Price: ${price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default CarCard;

