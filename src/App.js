import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Basket from "./pages/Basket";
import Error from "./Error";
import Navigation from "./Navigation";
import FAQ from "./FAQ";
import Regulamin from "./Regulamin";
import Kontakt from "./Kontakt";
import Footer from "./Footer";
import Sidebar from './Sidebar';

function App() {
  return (
    <BrowserRouter  >
      <div className="app">
        <Navigation />
        <div className="general">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/regulamin" component={Regulamin} />
            <Route exact path="/kontakt" component={Kontakt} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;