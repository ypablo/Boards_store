import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Home from "./Home";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Navigation from "./Navigation";
import FAQ from "./components/FAQ";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import Product from "./components/Product";

import ProductList from "./components/ProductList";
import Details from "./components/Details"; 

class App extends Component {
  render() {
    return (
      <BrowserRouter  >
        <div className="app">
          <Navigation />
          <div className="general">
            <Switch>
              {/*<Route exact path="/" component={Home} />*/}
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/regulamin" component={Terms} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
              {/*
              <Route path="/product" component={Product} />*/}
              
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter >

    );
  }
}

export default App;