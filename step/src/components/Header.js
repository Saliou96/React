import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Header({sant,att,niv}) {

    const [name,setName]=useState(sant);
    const [age,setAge]=useState(att);
    const [classe,setClasse]=useState(niv);
    
    const update = () => {
        setName('lamoth');
        setAge('22');
        setClasse('DIC2');
    }

    const reset = () => {
        setName('saliou');
        setAge('21');
        setClasse('MGLSI');
    }

  return (
    <div>
      <h1>My name is {name} and i have {age} years old. I am in {classe} at Polytechnic School of Dakar </h1>
      <Button variant="success" onClick={update}>Update</Button>
      <Button variant="warning" onClick={reset}>Reset</Button>
    </div>
  )
}

export default Header
