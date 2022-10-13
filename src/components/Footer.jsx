import React from 'react'
import '../css/Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function footer() {
  return (

    <div className="footer">
        <div className="footer-icons">
            <GitHubIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/>
            <EmailIcon sx={{ fontSize: "2rem", color: "#ffff2c", cursor:"pointer" }}/>
        </div>
        <div className="footer-copyright">GAVIN WALSH ©2022</div>
    </div>
    

  )
}

export default footer