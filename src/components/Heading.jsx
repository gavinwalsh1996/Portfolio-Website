import React from 'react'

//CSS
import '../css/Heading.scss'

function Heading({heading}) {

  return (

    <>
        <h2 className='heading'>{heading}</h2>
    </>
  )
}

export default Heading