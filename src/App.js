import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import { 
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
        </Routes>
        
    </div>
    </>
  );
};

export default App;
