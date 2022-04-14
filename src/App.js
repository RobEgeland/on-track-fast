import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';
import BuyCar from './components/BuyCar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path='/login' element={ <Login />}/>
        <Route exact path='/signup' element={ <SignUp />}/>
        <Route exact path='/buycar' element={ <BuyCar />}/>

      </Routes>
    </Router>
  );
}

export default App;
