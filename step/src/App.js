import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './layout/Navigation';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
