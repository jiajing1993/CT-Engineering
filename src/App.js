import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Company from './pages/Company'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import Safety from './pages/Safety'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className={`app-body ${this.props.location.pathname === "/" ? "app-home" : "app-other"}`}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/company" exact component={Company}></Route>
          <Route path="/project" exact component={Project}></Route>
          <Route path="/gallery" exact component={Gallery}></Route>
          <Route path="/safety" exact component={Safety}></Route>
        </div>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)
export default AppWithRouter;
