import React from 'react'
import '../css/Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link } from 'react-scroll'

function footer() {
  return (

    <div className="footer">
        <div className="return-button">
          <div className='nav-item'><Link to='home'smooth={true} offset={100} duration={500}><button><KeyboardDoubleArrowUpIcon sx={{ fontSize: "2.5rem", color: "#ffff2c", backgroundColor: "rgba(12, 12, 12, 0.95)", cursor:"pointer" }} /></button></Link></div>
        </div>
        <div className="footer-icons">
            <a href='https://github.com/gavinwalsh1996'><GitHubIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/></a>
            <a href='mailto:gavinwalsh739@email.com'><EmailIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/></a>
            <a href='https://linkedin.com/in/gavin-walsh-269b35238'><LinkedInIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/></a>

        </div>
        <div className="footer-copyright">GAVIN WALSH ©2022</div>
    </div>
    

  )
}

export default footer