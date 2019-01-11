import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Hall from './HallComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hall" component={Hall} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;