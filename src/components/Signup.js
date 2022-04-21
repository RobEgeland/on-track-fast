import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    function handleSubmit() {
        alert("thank you for signing up!")
        setUsername("")
        setEmail("")
        navigate("/")
    }

    return (
        <>
            <h1 className="signup">Signup!</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    textAlign: "center",
                }}
                noValidate
                autoComplete="off"
                
                >
                    <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" />
                    <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                    <Button variant="contained" onClick={handleSubmit} >Signup</Button>

                </Box>
        </>
    )
}

export default SignUp;