// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode Enabled";
      setTimeout(function () {
        setAlert(null);
      }, 1500);
    } else {
      setMode("light");
      document.title = "TextUtils - Light Mode Enabled";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    //start of JSX
    //only one html/JSX element can be returned in js function
    //so if we want to add heading before div then we need to use js fragments
    <>
      {" "}
      {/*this is a comment. Start of jsx fragment */}
      {/* <h1>Added in JSX fragment</h1> */}
      {/* bootstrap navbar started */}
      {/* replace class by className, href="#" by href="/" & cloase all single tags*/}
      {/* <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
      </div> */}
      
      <Router>
      <Navbar
        title="BUMA"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm show={showAlert} heading="Enter your text to analyze below" mode={mode} />}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </Router>
      {/*(end of JSX i.e JSX is HTML that hase wore a crown of javasrcipt)*/}
    </> //end of JSX fragment
  );
}

export default App;
