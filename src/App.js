import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Games from "./Games";
import Basket from "./Basket";
import Error from "./Error";
import Navigation from "./Navigation";
import FAQ from "./FAQ";
import Regulamin from "./Regulamin";
import Kontakt from "./Kontakt";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/regulamin" component={Regulamin} />
        <Route exact path="/kontakt" component={Kontakt} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
