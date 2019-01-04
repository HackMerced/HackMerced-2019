import React, { Component } from 'react';
import './assets/css/App.css';

import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Faqs />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default App;
