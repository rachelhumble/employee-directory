import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import NavTabs from "./components/navtabs";
import Home from "./components/pages/home";
import Lastname from "./components/pages/lastname"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={Home} />
            <Route exact path="/lastname" component={Lastname} />
          </div>
        </Router>
    </div>
  );
}

export default App;
