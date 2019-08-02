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
      direction: "asc"
    }
    this.chosenAsc = this.chosenAsc.bind(this);
    this.chosenDesc = this.chosenDesc.bind(this);
  }

  click() {
    alert("Hello");
  }

  chosenAsc() {
    console.log("ASC start")
    this.setState({ direction: "asc" });
    console.log("ASC stop")
  }

  chosenDesc() {
    console.log("DESC start")
    this.setState({ direction: "desc" });
    console.log("DESC stop")
  }

  render() {
    const direction = this.state.direction
    return (
      <BrowserRouter  >
        <div className="app">
          <Navigation />
          <div className="general">
            <Sidebar asc={this.chosenAsc} desc={this.chosenDesc} />
            <Switch>
              <Route exact path="/" render={() => <Home dataFromParent={this.click} direction={direction} />} />
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