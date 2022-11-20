import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h3 className='m-3 d-flex justify-content-center'>MEUN REACT PAR FORCE</h3>
      <Header sant='Saliou' att={21} niv='MGLSI'/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacts' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
