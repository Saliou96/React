import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './layout/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
