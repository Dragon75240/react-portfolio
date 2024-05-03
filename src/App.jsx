import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import "./styles/App.css";
import Menubar from "./Menubar.jsx";
import Home from "./pages/Home.jsx";
import SixthGrade from "./pages/grades/sixth.jsx";

const App = () => {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-porfolio" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        { /*  Grade Levels */ }
        <Route path="/grades/sixth-grade" element={<SixthGrade />}/>
      </Routes>
    </Router>
  );
};

export default App;
