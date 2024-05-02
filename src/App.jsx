import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe.jsx';
import './styles/App.css';
import Menubar from './Menubar.jsx';
import Home from './Pages/Home.jsx';

const App = () => {
 return (
   <Router>
      <Menubar/>

      <Routes>
        <Route path="/react-portfolio/home" element={<Home/>}/>
        <Route path="/react-portfolio/about" element={<AboutMe />} />
      </Routes>
    </Router>
 );
};

export default App;
