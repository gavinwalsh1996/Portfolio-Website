import React from 'react'
import '../css/Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function footer() {
  return (

    <div className="footer">
        <div className="footer-icons">
            <a href='https://github.com/gavinwalsh1996'><GitHubIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/></a>
            <a href='mailto:gavinwalsh739@email.com'><EmailIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/></a>
        </div>
        <div className="footer-copyright">GAVIN WALSH ©2022</div>
    </div>
    

  )
}

export default footer