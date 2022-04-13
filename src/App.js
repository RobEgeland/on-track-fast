import logo from './logo.svg';
import './App.css';
import { BroswerRouter as Router, Switch, Router } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
      </Switch>
    </Router>
  );
}

export default App;
