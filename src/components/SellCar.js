import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';


function SellCar({setCars, cars}) {
    const [car, setCar] = useState("")
    const [year, setYear] = useState("")
    const [pic, setPic] = useState("")
    const [sccaClass, setSccaClass] = useState("")
    const [equipment, setEquipment] = useState(false)
    const [champs, setChamps] = useState([])
    const [price, setPrice] = useState("")
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const newCar = {
            car,
            "url": pic,
            year,
            price,
            sccaClass,
            "UTDSaftey": equipment,
            "championships": champs
        }
        console.log(newCar)
        if (car || year || pic || sccaClass || equipment || champs || price === "") {
            alert("Please Fill Out all Fields")
        }else {
            fetch("http://localhost:3001/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        setCars([...cars, newCar]);
        navigate("/buycar");
        }
        
    }

    return(
        <>
            <h1 className="sellcar">Sell your car here!</h1>
            <form className="btn" onSubmit={handleSubmit}>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '125ch', textAlign: "center", padding: "20px", justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "140px"},
                }}
                noValidate
                autoComplete="off"
                
                >
                    <Grid container spacing={4} >
                        <Grid item xs={4}>
                            <TextField label="Car" variant="outlined" value={car} onChange={e => setCar(e.target.value)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            <TextField label="Year" variant="outlined" value={year} onChange={e => setYear(e.target.value)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            <TextField label="Picture" variant="outlined" value={pic} onChange={e => setPic(e.target.value)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            <TextField label="SCCA Class" variant="outlined" value={sccaClass} onChange={e => setSccaClass(e.target.value)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            Up-To-Date Equipment? <FormControlLabel control={<Checkbox />} label="Yes" onClick={e => setEquipment(!equipment)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            Championships Won: <TextField label="ex. 2000, 2001" variant="outlined" value={champs} onChange={e => setChamps(e.target.value)} />
                        </Grid>
                        <br/>
                        <Grid item xs={4}>
                            <TextField label="Price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
                        </Grid>
                        <br/>
                    </Grid>
                </Box>
                <button  type="submit" variant="contained">Sell Car</button>
            </form>
        </>
    )
}

export default SellCar;