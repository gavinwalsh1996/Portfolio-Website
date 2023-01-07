import React from 'react'

//Css
import '../css/ImageAndText.scss'

//Components 
import SmlButton from '../components/SmlButton'

function ImageAndText({projects}) {

  return (

<>

    {projects.map((project) => (

  <div className='imageandtext-container'>
      <div className="image_container">
        <div className="image-background-cont">
        <img src={project.img} className='grid-img' alt='' loading=" lazy" ></img>
        {/* <img src={project.img2} className='grid-img' alt='' loading=" lazy" ></img> */}
        </div>
      </div>
      <div className="textcontainer">
          <h6 className='textheading'>{project.heading}</h6>
          <h3 className='textsub-heading'>{project.subHeading}</h3>
          <p className='textmain-text'>{project.mainText}</p>

          <div className="btnss">
          <SmlButton link={project.gitHubButton} value='GITHUB' />
          <SmlButton link={project.LiveAppButton} value='LIVE APP'/>
          
          </div>
      </div>
  </div>


    ))}

</>


  )
}

export default ImageAndText