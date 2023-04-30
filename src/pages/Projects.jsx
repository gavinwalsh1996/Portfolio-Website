import React from 'react'

//Css
import '../css/Projects.scss'

//Images
import FesImage from '../images/fes-screenshot.png'
import ConstructionImage from '../images/west-coast-construction-image.png'
import PortfolioImage from '../images/portfolio-website-screenshot.png'
import SnowboardCrudImage from '../images/Snowboard-store-screenshot-2.png'
import SnowboardCrudImageMobile from '../images/Snowboard-store-mobile.png'
import SPWImage from '../images/website-screenshot.png'

import ImageAndText from '../components/ImageAndText'


function Projects() {

  let projects = [ 
    { 
      heading: 'REACT & TAILWIND',
      subHeading: 'Single Page Website',
      mainText: 'Simple one page website built using React and Tailwind CSS.',
      img: SPWImage,
      img2: SPWImage,
      gitHubButton: 'https://github.com/gavinwalsh1996/Single-Page-Website',
      LiveAppButton: 'https://singlewebpage.netlify.app/'
    },
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
      subHeading: 'Snowboard E-Commerce CRUD Application',
      mainText: 'A small CRUD application designed using my favourite snowboard brand.',
      img: SnowboardCrudImage,
      img2: SnowboardCrudImageMobile,
      gitHubButton: 'https://github.com/gavinwalsh1996/snowboard-e-commerce-store',
      LiveAppButton: 'https://snowboard-ecommerce.netlify.app/'
    }, 
    { 
      heading: 'REACT & SASS',
      subHeading: 'West-Coast-Construction',
      mainText: 'A construction website concept built to showcase my layout skills and to show that I can build a generic website. This project was built using React and styled with SASS.',
      img: ConstructionImage,
      img2: SnowboardCrudImageMobile,
      gitHubButton: 'https://github.com/gavinwalsh1996/west-coast-construction',
      LiveAppButton: 'https://west-coast-construction.netlify.app'
    }, 
    { 
      heading: 'REACT & SASS',
      subHeading: 'Portfolio Website',
      mainText: 'Simple one page website designed to showcase my work.',
      img: PortfolioImage,
      img2: SnowboardCrudImageMobile,
      gitHubButton: 'https://github.com/gavinwalsh1996/Portfolio-Website',
      LiveAppButton: 'https://gavinwalsh.netlify.app'
    } 

  ] 

  return (
    <div className='projectss'>
      <h2 className='heading'>Projects</h2>
    
    <ImageAndText projects={projects} />

    </div>
  )
}

export default Projects