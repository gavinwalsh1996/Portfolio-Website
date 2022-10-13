import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link } from 'react-scroll'
import ReactSwitch from 'react-switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';

//CSS
import '../css/Header.scss'

//Pages 
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'

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
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>

            <React.Fragment>
            <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <DarkModeIcon style={{color: 'white', width: '1rem'}} />
            </React.Fragment>

        </div>
        <div className='navigation'>
            <div className='nav-item'><Link to='home'smooth={true} offset={100} duration={500}>Home</Link></div>
            <div className='nav-item'><Link to='about'smooth={true} offset={20} duration={500}>About</Link></div>
            <div className='nav-item'><Link to='projects' smooth={true} offset={-100} duration={500}>Projects</Link></div>
            <div className='nav-item'><Link to='contact' smooth={true} offset={100} duration={500}>Contact</Link></div>
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