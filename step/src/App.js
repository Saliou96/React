import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './layout/Navigation';
import About from './pages/About';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
