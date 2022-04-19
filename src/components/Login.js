import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Login({setUsername, setIsLoggedIn, username}) {
    const navigate = useNavigate();


    function handleClick() {
        setIsLoggedIn(true)
        navigate("/")
        
    }


    return (
        <>
            <h1>Login!</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    textAlign: "center",
                }}
                noValidate
                autoComplete="off"
                
                >
                    <TextField label="UserName" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Button variant="contained" onClick={handleClick} >Login</Button>

                </Box>
        </>
    )
}

export default Login;