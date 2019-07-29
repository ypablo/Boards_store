import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Basket from "./components/Basket";
import Error from "./components/Error";
import Navigation from "./Navigation";
import FAQ from "./components/FAQ";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
            <Route exact path="/regulamin" component={Terms} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
