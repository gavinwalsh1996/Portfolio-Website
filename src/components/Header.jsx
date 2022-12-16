import React from 'react'
import { Link } from 'react-scroll'
import ReactSwitch from 'react-switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Resume from '../assets/Gavin-Walsh-Resume.pdf';

//CSS
import '../css/Header.scss'

import { LightMode } from '@mui/icons-material';

function Header({theme, toggleTheme}) {

  return (
    <>

    <div className="nav-bar">
        <div className="switch">

            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className='switch' onColor="#86d3ff" height={20} width={48} />
            {theme === 'light'
              ? <React.Fragment>
                <label>Light Mode</label>
                <LightMode style={{color: 'white', width: '1rem'}}/>
                </React.Fragment>

              : <React.Fragment>
                <label>Dark Mode</label>
                <DarkModeIcon style={{color: 'white', width: '1rem'}}/>
                </React.Fragment> 
            }

        </div>
        <div className='navigation'>
            <div className='nav-item'><Link to='home'smooth={true} offset={100} duration={500}>Home</Link></div>
            <div className='nav-item'><Link to='about'smooth={true} offset={20} duration={500}>About</Link></div>
            <div className='nav-item'><Link to='projectss' smooth={true} offset={-100} duration={500}>Projects</Link></div>
            <div className='nav-item'><Link to='contact' smooth={true} offset={100} duration={500}>Contact</Link></div>
            <div className='nav-item-resume'><a href={Resume} download>Resume</a></div>
        </div>
    </div> 
    </>
  )
}

export default Header