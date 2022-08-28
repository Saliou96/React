import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Mission from './pages/mission';
import Services from './pages/service';
import Realisations from './pages/realisation';
import Equipements from './pages/equipement';
import Contacts from './pages/contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mission/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/réalisations' element={<Realisations/>}/>
        <Route path='/équipements' element={<Equipements/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
