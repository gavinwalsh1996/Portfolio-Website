import React from 'react'
import '../css/Home.scss'

import LrgButton from '../components/LrgButton'

function Home() {

  let buttonValue = 'About Me'


  return (


    <div className='home'>
        <h1>Hello, I'm <span className='word'>Gavin.</span></h1>
        <h1>I'm a front end developer.</h1>
        <LrgButton buttonValue={buttonValue} />
    </div>


  )
}

export default Home