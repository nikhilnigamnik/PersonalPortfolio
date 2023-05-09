import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NavBar from "./components/NavBar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <div className="content w-3/5 overflow-hidden">
      <PreLoader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Skills />} />
        <Route path="/work" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
