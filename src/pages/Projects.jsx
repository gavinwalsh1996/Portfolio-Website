import React from 'react'
import Heading from '../components/Heading'
import SmlButton from '../components/SmlButton'
import '../css/Projects.scss'
import FES from '../images/fes screenshot.png'
// import PortfolioImg from '../images/portfolio-website-screenshot.png'
import PortfolioImg2 from '../images/portfolio-website.png'


function Projects({heading, projects}) {



  let buttonValue1= 'Live App';
  let buttonValue2= 'Learn More';
  let FlightEntLink = 'https://github.com/gavinwalsh1996/flight-entertainment-system';
  let FlightEntLinkWebsite = 'https://bucolic-dango-c7b9a7.netlify.app';
  let PortfolioLink = 'https://github.com/gavinwalsh1996/Portfolio-Website/tree/master'
  let PortfolioLinkWebsite = 'https://heroic-gumdrop-f6e4a5.netlify.app'


  return (
    <>

    {/* {projects.map((project) => (
      <>
        <h1>{project[0].title}</h1>
      
      </>
    ))}  */}

  <div className='projects'>
      
  <Heading heading={heading} />
  

  <div className='projects-container'>
    <div className="project-image">
        <img src={FES} alt='' />
    </div>
    <div className="project-desc">
        <h3>Flight Entertainment System</h3>
        <p>Experience a flight from Dublin to Barcelona with this {<br></br>}
          React Front end flight entertainment system app
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
        <img src={PortfolioImg2} alt='' />
    </div>
    <div className="project-desc">
        <h3>Portfolio Website</h3>
        <p>My portfolio website built with React and styled with SASS</p>
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