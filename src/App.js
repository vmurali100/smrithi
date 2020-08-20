import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Captur from "./Components/Captur";
import Koleos from "./Components/Koleos";
import Megane from "./Components/Megane";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/capture" exact component={Captur} />
          <Route path="/koleos" exact component={Koleos} />
          <Route path="/megane" exact component={Megane} />
          <Route path="/pre-owned" exact component={PreOwned} />
          <Route path="/subscription" exact component={Subscription} />
          <Main />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
