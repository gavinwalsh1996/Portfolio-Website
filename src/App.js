import React, { createContext, useState } from 'react';
import './App.css';

//Components 
import Header from './components/Header'
import LrgButton from './components/LrgButton';
import SmlButton from './components/SmlButton';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import Contact from './pages/Contact';

//Test
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr == 'light' ? 'dark' : 'light'));
  }

  let heading = 'Projects';
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Home />
        <About />
        <Projects heading={heading}/>
        <Projects />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
