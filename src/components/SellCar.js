import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function SellCar() {
    const [car, setCar] = useState("")
    const [year, setYear] = useState("")
    const [pic, setPic] = useState("")
    const [sccaClass, setSccaClass] = useState("")
    const [equipment, setEquipment] = useState(false)
    const [champs, setChamps] = useState([])
    const [price, setPrice] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const newCar = {
            car,
            pic,
            year,
            price,
            sccaClass,
            equipment,
            champs
        }
        console.log(newCar)
    }

    return(
        <>
            <h1>Sell your car here!</h1>
            <form onSubmit={handleSubmit}>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField label="Car" variant="outlined" value={car} onChange={e => setCar(e.target.value)} />
                    <br/>
                    <TextField label="Year" variant="outlined" value={year} onChange={e => setYear(e.target.value)} />
                    <br/>
                    <TextField label="Picture" variant="outlined" value={pic} onChange={e => setPic(e.target.value)} />
                    <br/>
                    <TextField label="SCCA Class" variant="outlined" value={sccaClass} onChange={e => setSccaClass(e.target.value)} />
                    <br/>
                    Up-To-Date Equipment? <FormControlLabel control={<Checkbox />} label="Yes" onClick={e => setEquipment(!equipment)} />
                    <br/>
                    Championships Won: <TextField label="ex. 2000, 2001" variant="outlined" value={champs} onChange={e => setChamps([e.target.value])} />
                    <br/>
                    <TextField label="Price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
                    <br/>
                </Box>
                <button type="submit" variant="contained">Sell Car</button>
            </form>
        </>
    )
}

export default SellCar;