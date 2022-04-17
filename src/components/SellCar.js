import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function SellCar() {
    return(
        <form className="sellcar">
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField label="Car" variant="outlined" />
                <br/>
                <TextField label="Year" variant="outlined" />
                <br/>
                <TextField label="Picture" variant="outlined" />
                <br/>
                Up-To-Date Equipment? <FormControlLabel control={<Checkbox />} label="Yes" />
            </Box>
        </form>
    )
}

export default SellCar;