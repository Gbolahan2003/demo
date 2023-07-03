import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./Pages/Firstpage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import ImageContainer from "./Components/ImageContainer";
import { PageFour } from "./Pages/PageFour";
import { NavBar } from "./Components/NavBar";
import FacilitiesContainer from "./Components/FacilitiesContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/facilities" element={<SecondPage />} />
        <Route path="/rooms" element={<ThirdPage />} />
        <Route path="/contact" element={<PageFour />} />
      </Routes>
    </div>
  );
}

export default App;
