import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import "./styles/App.css";
import Menubar from "./Menubar.jsx";
import Home from "./pages/Home.jsx";
// eslint-disable-next-line no-unused-vars
import sixth_grade from "./pages/grades/sixth.jsx";

const App = () => {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-porfolio" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        { /*  Grade Levels */ }
        <Route path="/grade-levels/sixth-grade" element={<sixth_grade />}/>
      </Routes>
    </Router>
  );
};

export default App;
