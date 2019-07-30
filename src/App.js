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
import data from './Boards.json';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        price: 'asc'
      }
    }
    this.sortAscending = this.sortAscending.bind(this);
  }

  sortAscending(key) {
    console.log("test")
    this.setState({
      data: data.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc' : 'asc'
      }
    })
  }


  render() {
    return (
      <BrowserRouter  >
        <div className="app">
          <Navigation />
          <div className="general">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} data={this.state.data} sort={this.sortAscending} />
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
