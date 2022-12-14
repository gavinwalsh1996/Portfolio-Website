import React, { useState } from 'react';
import './App.css';


//Components 
import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer'
import Contact from './pages/Contact';


export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
