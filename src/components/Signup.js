import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    return (
        <>
            <h1>Signup!</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    textAlign: "center",
                }}
                noValidate
                autoComplete="off"
                
                >
                    <TextField label="Name" variant="outlined" />
                    <TextField label="Email" variant="outlined" />
                    <Button variant="contained" >Signup</Button>

                </Box>
        </>
    )
}

export default SignUp;