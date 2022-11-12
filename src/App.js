import React, { useState } from 'react';
import './App.css';

// Removed createContext

//Components 
import Header from './components/Header'
// import LrgButton from './components/LrgButton';
// import SmlButton from './components/SmlButton';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import Contact from './pages/Contact';

//Images
import FesImage from './images/fes screenshot.png'
import PortfolioImage from './images/portfolio-website-screenshot.png'

//Test
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  let heading = 'Projects';

  let projects = [ 
    {
      title: 'Flight Entertainment System', 
      description: 'Experience a flight from Dublin to Barcelona with this React Front end flight entertainment system app',
      img: FesImage,
      gitHub: 'https://github.com/gavinwalsh1996/flight-entertainment-system',
      LiveApp: 'https://bucolic-dango-c7b9a7.netlify.app'
    }, 
    {
      portTitle: 'Portfolio Website',
      portDescription: 'My portfolio website',
      portImg: PortfolioImage,
      portGitHub: 'https://github.com/gavinwalsh1996/Portfolio-Website/tree/master',
      portLiveApp: 'https://heroic-gumdrop-f6e4a5.netlify.app'
    }
  ]
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Home />
        <About />
        <Projects heading={heading}/>
        {/* <Projects projects={projects}/> */}
        {/* <Projects /> */}
        <Contact />
        <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
