import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "Hello World", 
    } 
    this.click=this.click.bind(this);
  }

  click() {
    alert("Hello");
  }


  render() {
    return (
      <BrowserRouter  >
        <div className="app">
          <Navigation />
          <div className="general">
            <Sidebar dataFromParent = {this.click}/>
            <Switch>
              <Route exact path="/" render={() => <Home dataFromParent = {this.click}/>} />
              <Route exact path="/basket" component={Basket} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/regulamin" component={Terms} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter >

    );
  }
}

export default App;