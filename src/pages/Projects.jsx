import React from 'react'
import Heading from '../components/Heading'
import SmlButton from '../components/SmlButton'
import '../css/Projects.scss'
import FES from '../images/fes-screenshot.png'
import PortfolioImg from '../images/portfolio-website-screenshot.png'


function Projects({heading, projects}) {



  let buttonValue1= 'Live App';
  let buttonValue2= 'Github';
  let FlightEntLink = 'https://github.com/gavinwalsh1996/flight-entertainment-system';
  let FlightEntLinkWebsite = 'https://flight-entertainment-system.netlify.app';
  let PortfolioLink = 'https://github.com/gavinwalsh1996/Portfolio-Website/tree/master'
  let PortfolioLinkWebsite = 'https://gavinwalsh.netlify.app'


  return (
    <>

  <div className='projects'>
      
  <Heading heading={heading} />
  

  <div className='projects-container'>
    <div className="project-image">
        <img src={FES} alt='' />
    </div>
    <div className="project-desc">
        <h3>Flight Entertainment System</h3>
        <p>In flight entertainment system built with React. {<br></br>}
          In this project, I make use of TMDB and Open Weather Map API's to gather information.
          This App also includes many different React Hooks and features such as React Router and React Context. {<br></br>}
        </p>
        <div className="buttons">
        <SmlButton value={buttonValue1} link={FlightEntLinkWebsite} />
        <SmlButton value={buttonValue2} link={FlightEntLink} />
        </div>
      </div> 

  </div>

  {/* Duplicate for now for test. Recreate with props. */}

  <div className='projects-container'>
    <div className="project-image">
        <img src={PortfolioImg} alt='' />
    </div>
    <div className="project-desc">
        <h3>Portfolio Website</h3>
        <p> A simple one page application designed to showcase my work.
          This project was built with React and styled with SASS.
        </p>
        <div className="buttons">
        <SmlButton value={buttonValue1} link={PortfolioLinkWebsite} />
        <SmlButton value={buttonValue2} link={PortfolioLink} />
        </div>
      </div> 

  </div>

  </div>
  
  </>
  )
}

export default Projects