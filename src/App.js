import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import NavTabs from "./components/navtabs";
import Main from "./components/pages/main";
import Lastname from "./components/pages/lastname"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={Main} />
            <Route exact path="/lastname" component={Lastname} />
          </div>
        </Router>
    </div>
  );
}

export default App;
