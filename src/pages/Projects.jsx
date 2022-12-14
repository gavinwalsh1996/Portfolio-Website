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
      heading: "REACT & CSS",
      subHeading: 'Flight Entertainment System',
      mainText: "Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app. This design uses data from multiple API'S.",
      img: FesImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
      LiveAppButton: 'https://flight-entertainment-system.netlify.app'
    }, 
    { 
      heading: 'REACT & SASS',
      subHeading: 'West-Coast-Construction',
      mainText: 'A construction website concept built to showcase my layout skills and to show that I can build a generic website. This project was built using React and styled with SASS.',
      img: ConstructionImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/west-coast-construction',
      LiveAppButton: 'https://west-coast-construction.netlify.app'
    }, 
    { 
      heading: 'REACT & SASS',
      subHeading: 'Portfolio Website',
      mainText: 'Simple one page website designed to showcase my work.',
      img: PortfolioImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/Portfolio-Website',
      LiveAppButton: 'https://gavinwalsh.netlify.app'
    }, 

  ] 

  return (
    <div className='projectss'>
      <h2 className='heading'>Projects</h2>
    
    <ImageAndText projects={projects} />

    </div>
  )
}

export default Projects