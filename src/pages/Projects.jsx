import React from 'react'
import Heading from '../components/Heading'
import SmlButton from '../components/SmlButton'
import '../css/Projects.scss'
import FES from '../images/flight-entertainment-system-image.jpg'


function Projects({heading}) {

  let buttonValue1= 'Live App';
  let buttonValue2= 'Learn More';

  return (

    <div className='projects'>
    
    <Heading heading={heading} />

    <div className='projects-container'>
      <div className="project-image">
          <img src={FES} />
      </div>
      <div className="project-desc">
          <h3>Flight Entertainment System</h3>
          <p>Experience a flight from Dublin to Barcelona with this {<br></br>}
            React Front end flight entertainment system app
          </p>
          <div className="buttons">
          <SmlButton value={buttonValue1}/>
          <SmlButton value={buttonValue2}/>
          </div>
        </div> 

    </div>

    </div>

  )
}

export default Projects