import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-scroll'
import ReactSwitch from 'react-switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import Resume from '../assets/Gavin-Walsh-Developer-Resume.pdf';


//CSS
import '../css/Header.scss'

//Pages 
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Home from '../pages/Home'
// import Projects from '../pages/Projects'
import { LightMode } from '@mui/icons-material';

function Header({theme, toggleTheme}) {

  return (
    <>
     {/* <Router> */}

    <div className="nav-bar">
        {/* <div className='navigation'>
            <div className='nav-item'><Link to='/'>Home</Link></div>
            <div className='nav-item'><Link to='/about'>About</Link></div>
            <div className='nav-item'><Link to='/projects'>Projects</Link></div>
            <div className='nav-item'><Link to='/contact'>Contact</Link></div>
        </div> */}
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
            <div className='nav-item'><Link to='projects' smooth={true} offset={0} duration={500}>Projects</Link></div>
            <div className='nav-item'><Link to='contact' smooth={true} offset={100} duration={500}>Contact</Link></div>
            {/* <div className='nav-item'><Link to='resume' smooth={true} offset={100} duration={500}>Resume</Link></div> */}
            <div className='nav-item-resume'><a href={Resume} download>Resume</a></div>
        </div>
    </div> 

    {/* <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes> */}

     {/* </Router> */}
    </>
  )
}

export default Header