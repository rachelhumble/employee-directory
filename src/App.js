import React from 'react';
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Header from "./components/header";
import NavTabs from "./components/navtabs";
import Main from "./components/pages/main";
import Gender from "./components/pages/gender"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <HashRouter>
          <div className="body">
            <NavTabs />
            <Route exact path="/" component={Main} />
            <Route exact path="/gender" component={Gender} />
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
