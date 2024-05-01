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
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
 );
};

export default App;
