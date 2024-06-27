import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { Solution } from "./Pages/Solution";
import { Data } from "./Pages/Data";
import { Cloud } from "./Pages/Cloud";
import { AI } from "./Pages/AI";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="solution">
            <Route path="" element={<Solution />} />
            <Route path="data" element={<Data />} />
            <Route path="cloud" element={<Cloud />} />
            <Route path="ai" element={<AI />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
