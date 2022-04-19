import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';
import BuyCar from './components/BuyCar';
import SellCar from './components/SellCar';

function App() {
  const [cars, setCars] = useState([])
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/cars")
    .then(res => res.json())
    .then(res => setCars(res))
  },[])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home username={username} isLoggedIn={isLoggedIn} /> }/>
        <Route exact path='/login' element={ <Login username={username} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}/>
        <Route exact path='/signup' element={ <SignUp />}/>
        <Route exact path='/buycar'  element={ <BuyCar cars={cars} />}/>
        <Route exact path='/sellcar' element={ <SellCar cars={cars} setCars={setCars} />}/>
      </Routes>
    </Router>
  );
}

export default App;
