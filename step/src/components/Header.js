import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Header({sant,att}) {

    const [name,setName]=useState(sant);
    const [age,setAge]=useState(att);
    
    const update = () => {
        setName('lamoth');
        setAge('22');
    }

    const reset = () => {
        setName('saliou');
        setAge('21');
    }


  return (
    <div>
      <h1>My name is {name} and i have {age} years old.</h1>
      <Button variant="success" onClick={update}>Update</Button>
      <Button variant="warning" onClick={reset}>Reset</Button>
    </div>
  )
}

export default Header
