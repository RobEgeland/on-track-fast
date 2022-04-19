import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


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
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className="form"
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
                    Championships Won: <TextField label="ex. 2000, 2001" variant="outlined" value={champs} onChange={e => setChamps(e.target.value)} />
                    <br/>
                    <TextField label="Price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
                    <br/>
                </Box>
                <button  type="submit" variant="contained">Sell Car</button>
            </form>
        </>
    )
}

export default SellCar;