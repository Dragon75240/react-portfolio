import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe.jsx';
import './styles/App.css';
import Menubar from './Menubar.jsx';

const App = () => {
 return (
   <Router>
      <Menubar/>

      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
 );
};

export default App;
