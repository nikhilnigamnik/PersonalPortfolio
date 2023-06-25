import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NavBar from "./components/NavBar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import PreLoader from "./components/PreLoader";
import Footer from "./components/Footer";

const ChangePageTitle = ({ pageTitle }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // document.title = `${pageTitle} - Your Website Name`;
    document.title = "Portfolio | Nikhil Nigam";
  }, [pageTitle]);

  return null;
};

function App() {
  return (
    <div className="content w-3/5 overflow-hidden">
      <PreLoader />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ChangePageTitle pageTitle="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <ChangePageTitle pageTitle="Resume" />
              <Skills />
            </>
          }
        />
        <Route
          path="/work"
          element={
            <>
              <ChangePageTitle pageTitle="Work" />
              <Services />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ChangePageTitle pageTitle="Contact" />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
