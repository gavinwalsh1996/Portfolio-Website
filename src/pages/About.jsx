import React from 'react'
import '../css/About.scss'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Heading from '../components/Heading'
import HTML from '../images/html-image.png'
import CSS from '../images/css.png'
import SASS from '../images/sass.png'
import REACT from '../images/react.png'
import GIT from '../images/git.png'
import JS from '../images/js.png'


//CSS
import '../css/About.scss'

function About() {

  let heading = 'About'

  return (

  <div className='about'>

    <Heading heading={heading}/>

      <AccountCircleIcon sx={{ fontSize: "200px", color: "#1b7ced" }} />

          <p className='description'>Self thought and fully committed to the philosophy of life-long learning, I’m a junior front end developer with a deep passion for JavaScript, React and all
            things web development. The unique combination of creativity, 
            logic, technology and never running out of new things to discover, 
            drives my excitement and passion for web development. When I’m 
            not at my computer I like to spend my free time snowboarding, watching football or 
            doing some sort of outdoor sport.</p>

            <div className="skills">

              <div className="skills-row">

                <div className="skills-name">
                  <img src={HTML} alt='' />
                  <div className='lang-name'>HTML</div>
                </div>
                
                <div className="skills-name">
                <img src={CSS} alt='' />
                  <div className='lang-name'>CSS</div>
                </div>

                <div className="skills-name">
                <img src={SASS} alt=''/>
                  <div className='lang-name'>SASS</div>
                </div>

              </div>
              <div className="skills-row">

                <div className="skills-name">
                  <img src={REACT} alt='' />
                  <div className='lang-name'>REACT</div>
                </div>

                <div className="skills-name">
                <img src={GIT} alt='' />
                  <div className='lang-name'>GIT</div>
                </div>

                <div className="skills-name">
                <img src={JS} alt='' />
                  <div className='lang-name'>JAVASCRIPT</div>
                </div>

              </div>
            </div>
  </div>

  )
}

export default About