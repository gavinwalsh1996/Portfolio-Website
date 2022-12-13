import React, { useState } from 'react';
import './App.css';


//Components 
import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import Contact from './pages/Contact';
import ImageAndText from './components/ImageAndText';

//Image 
// import FesImage from './images/fes-screenshot.png'
// import ConstructionImage from './images/west-coast-construction-image.png'
// import PortfolioImage from './images/portfolio-website-screenshot.png'


export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  //  let heading = 'Projects';

  //  let projects = [ 
  //    { 
  //      heading: 'REACT & CSS',
  //      subHeading: 'Flight Entertainment System',
  //      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
  //      img: FesImage,
  //      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
  //      LiveAppButton: 'https://flight-entertainment-system.netlify.app'
  //    }, 
  //    { 
  //      heading: 'REACT & CSS',
  //      subHeading: 'West-Coast-Construction',
  //      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
  //      img: ConstructionImage,
  //      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
  //      LiveAppButton: 'https://west-coast-construction.netlify.app'
  //    }, 
  //    { 
  //      heading: 'REACT & CSS',
  //      subHeading: 'Portfolio Website',
  //      mainText: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
  //      img: PortfolioImage,
  //      gitHubButton: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
  //      LiveAppButton: 'https://gavinwalsh.netlify.app'
  //    }, 

  //  ]  
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Home />
        <About />
        {/* Test */}
        <Projects />
        {/* <ImageAndText projects={projects} /> */}
        {/* <ImageAndText />
        <ImageAndText /> */}
        {/* Test */}
        {/* <Projects /> */}
        {/* <Projects projects={projects}/> */}
        {/* <Projects /> */}
        <Contact />
        <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
