import React from 'react'
import '../css/SmlButton.scss'

function SmlButton({value}) {

  return (

    <div className='smlbtn-container'>
        <button>{value}</button>
    </div>

  )
}

export default SmlButton