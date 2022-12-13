import React from 'react'

//Css
import '../css/Projects.scss'

//Images
import FesImage from '../images/fes-screenshot.png'
import ConstructionImage from '../images/west-coast-construction-image.png'
import PortfolioImage from '../images/portfolio-website-screenshot.png'

import ImageAndText from '../components/ImageAndText'


function Projects() {

  let projects = [ 
    { 
      heading: 'REACT & CSS',
      subHeading: 'Flight Entertainment System',
      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
      img: FesImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
      LiveAppButton: 'https://flight-entertainment-system.netlify.app'
    }, 
    { 
      heading: 'REACT & CSS',
      subHeading: 'West-Coast-Construction',
      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
      img: ConstructionImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
      LiveAppButton: 'https://west-coast-construction.netlify.app'
    }, 
    { 
      heading: 'REACT & CSS',
      subHeading: 'Portfolio Website',
      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
      img: PortfolioImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
      LiveAppButton: 'https://gavinwalsh.netlify.app'
    }, 

  ] 



  let buttonValue1= 'Live App';
  let buttonValue2= 'Github';
  let FlightEntLink = 'https://github.com/gavinwalsh1996/flight-entertainment-system';
  let FlightEntLinkWebsite = 'https://flight-entertainment-system.netlify.app';
  let PortfolioLink = 'https://github.com/gavinwalsh1996/Portfolio-Website/tree/master'
  let PortfolioLinkWebsite = 'https://gavinwalsh.netlify.app'


  return (
    <div className='projectss'>
      <h2 className='heading'>Projects</h2>
    
    <ImageAndText projects={projects} />

    </div>
  )
}

export default Projects