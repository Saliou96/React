import React from 'react'
import Carte from './Carte'
import Header from './Header'

function Home() {

  return (
    <div className='mt-5 d-flex justify-content-center'>
        <h1>This is Home page!!!!</h1>
      <Header sant='Saliou' att={21} niv='MGLSI'/>
    </div>
  )
}

export default Home
