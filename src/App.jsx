import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Hero from './components/hero';

import style from './App.styl';

class App extends Component {
  componentDidMount() {
    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = () => {
    //   const currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById('navbar').style.top = '0';
    //   } else {
    //     document.getElementById('navbar').style.top = '-50px';
    //   }
    //   prevScrollpos = currentScrollPos;
    // };
  }

  render() {
    return (
      <Router>
        <div className={style['padding-top']}>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/hero/:id" component={Hero} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
