import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './layouts/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
