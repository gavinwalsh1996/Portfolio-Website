import React from 'react'
import '../css/SmlButton.scss'

function SmlButton({ value, link }) {

  return (

    <div className='smlbtn-container'>
        <a href={link}><button className='sml_btn'>{value}</button></a>
    </div>

  )
}

export default SmlButton