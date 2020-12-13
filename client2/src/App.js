import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./pages/home"
import Save from "./pages/save"
function App() {
  return (
     <Router>
       <Route exact path="/" component={ Home }/>
       <Route exact path="/save" component={ Save }/>
     </Router>
  );
}

export default App;
