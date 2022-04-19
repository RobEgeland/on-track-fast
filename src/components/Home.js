import React from "react";
import Card from "@mui/material/Card"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



function Home({username, isLoggedIn}) {
    

    return (
        <div className="home">
            {isLoggedIn ? <h1>Welcome, {username}!</h1> : <h1>Welcome to on track fast!</h1>}
            
            <p>go from sitting in your basement to racing on track before you know it!</p>

            <br/>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} >
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Darren T. from Texas"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Darren T.
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Dallas, TX
                                </Typography>
                                <Typography variant="body2">
                                    "I wanted to get into racing, it took me three months to buy a car and get me on track, thanks On Track Fast!"
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=20&m=1016761216&s=612x612&w=0&h=jEC8voGLjSyhdOO7EMQyrLtZ9m--TEUmd4X56sqyZk0="
                                alt="Trevor H. from Minnesota"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Trevor H.
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Minneapolis, MN
                                </Typography>
                                <Typography variant="body2">
                                    "I was worried about selling my car as it ussually comes with answering repetative questions, but On Track Fast made it quick and easy!"
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://photographycourse.net/wp-content/uploads/2021/06/how-to-take-professional-headshots.jpg"
                                alt="Hannah P. from California"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Hannah P.
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Long Beach, CA
                                </Typography>
                                <Typography variant="body2">
                                    "Finding the right car has always been hard, but when I signed up for On Track Fast I found the perfect car only 30 miles from me!"
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                </Grid>
        </Box>
            
        </div>
    )
}

export default Home;