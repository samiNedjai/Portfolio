import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Error from "./Pages/Home/Error";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
