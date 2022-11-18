import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* <Header sant='Saliou' att={21}/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' component={Home} exact/>
          <Route path='/contacts' component={Contact}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
