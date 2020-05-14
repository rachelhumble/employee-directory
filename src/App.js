import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import NavTabs from "./components/navtabs";
import Main from "./components/pages/main";
import Department from "./components/pages/department"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <div className="body">
            <NavTabs />
            <Route exact path="/" component={Main} />
            <Route exact path="/department" component={Department} />
          </div>
        </Router>
    </div>
  );
}

export default App;
