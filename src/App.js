import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import { 
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className={'bg-black flex justify-between items-center h-24 border-b-2 border-sky-400'}>
        <h1 className={'text-white ml-3 text-2xl underline font-serif border-b-2 border-sky-800'}>Portfolio</h1>
        <nav>
          <ul className={'bg-black list-none m-0 p-0'}>
            <li className={'inline list-none text-white text-lg p-2'}><NavLink to="/" exact activeClassName='active'>Home</NavLink></li>
            <li className={'inline list-none text-white text-lg p-2'}><NavLink to="/about" activeClassName='active'>About</NavLink></li>
            <li className={'inline list-none text-white text-lg p-2'}><NavLink to="/projects" activeClassName='active'>Projects</NavLink></li>
            <li className={'inline list-none text-white text-lg p-2'}><NavLink to="/skills" activeClassName='active'>Skills</NavLink></li>
            <li className={'inline list-none text-white text-lg p-2'}><NavLink to="/contact" activeClassName='active'>Contact</NavLink></li>
          </ul>
        </nav>
        </div>
        <Routes>

              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>
    </div>
    
  );
};

export default App;
