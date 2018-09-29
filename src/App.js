import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Service from './pages/Service'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import Safety from './pages/Safety'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/service" exact component={Service}></Route>
        <Route path="/project" exact component={Project}></Route>
        <Route path="/gallery" exact component={Gallery}></Route>
        <Route path="/safety" exact component={Safety}></Route>
      </div>
    );
  }
}

export default App;
