import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import {BrowserRouter as Router, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
