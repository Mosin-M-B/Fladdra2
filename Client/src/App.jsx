import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { Solution } from "./Pages/Solution";

import { OurThinking } from "./Pages/OurThinking.jsx";

import { GetInTouch} from './Pages/GetInTouch'
import { WhoWeAre } from "./Pages/WhoWeAre";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="solution" element={<Solution/>}/>
          <Route path="getin" element={<GetInTouch/>}/>
          <Route path="whowe" element={<WhoWeAre/>}/>
          <Route path="our" element={<OurThinking/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
