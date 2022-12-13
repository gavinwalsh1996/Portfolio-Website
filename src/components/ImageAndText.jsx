import React from 'react'

//Css
import '../css/ImageAndText.scss'
// import Image from '../images/fes-screenshot.png'

//Components 
import SmlButton from '../components/SmlButton'

function ImageAndText({projects}) {

  return (

    // <div className='imagetextgrid-container'>
    //       <div className="one">
    //             <img src={textGridDataTwo.img} className='grid-img'></img>
    //           <div className="text-container">
    //               <h6 className='heading'>{textGridDataTwo.heading}</h6>
    //               <h2 className='sub-heading'>{textGridDataTwo.subHeading}</h2>
    //               <p className='grid-text'>{textGridDataTwo.gridText}</p>
    //           </div>
    //       </div>
    // </div>

<>

    {projects.map((project) => (

  <div className='imageandtext-container'>
      <div className="image_container">
        <div className="image-background-cont">
        <img src={project.img} className='grid-img' alt='' loading=" lazy" ></img>
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


// import React from 'react'

// //Css
// import '../css/ImageAndText.scss'
// // import Image from '../image/construction-team.jpg'

// function ImageAndText({data}) {

//   return (

//     // <div className='imagetextgrid-container'>
//     //       <div className="one">
//     //             <img src={textGridDataTwo.img} className='grid-img'></img>
//     //           <div className="text-container">
//     //               <h6 className='heading'>{textGridDataTwo.heading}</h6>
//     //               <h2 className='sub-heading'>{textGridDataTwo.subHeading}</h2>
//     //               <p className='grid-text'>{textGridDataTwo.gridText}</p>
//     //           </div>
//     //       </div>
//     // </div>
//     <div className='imageandtext-container'>
//           <div className="one">
//                 <img src={data.Image} className='grid-img' alt='' loading=" lazy" ></img>
//               <div className="textcontainer">
//                   <h6 className='textheading'>{data.heading}</h6>
//                   <h3 className='textsub-heading'>{data.subHeading}</h3>
//                   <p className='textmain-text'>{data.mainText}</p>
//               </div>
//           </div>
//     </div>

//   )
// }

// export default ImageAndText