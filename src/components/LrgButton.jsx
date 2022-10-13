import React from 'react'
import '../css/LrgButton.scss'
import { Link } from 'react-scroll'

//Icons
import SouthIcon from '@mui/icons-material/South';

function LrgButton({buttonValue}) {

  return (

    <Link to='about'smooth={true} offset={20} duration={500}><div className='lrgbtn-container'><button>{buttonValue} <SouthIcon sx={{ color: "#ffff2c" }} /></button></div></Link>

  )
}

export default LrgButton