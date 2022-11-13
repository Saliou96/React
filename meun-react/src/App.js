import './App.css';
import { useState,Text,Button } from 'react';

function App() {
  const [name,setName] = useState('moussa');
  const clickHandler= () => {
    setName('Alioune');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <input type="button" name="" value="Update name" onClick={clickHandler}/>
    </div>
  );
}

export default App;
