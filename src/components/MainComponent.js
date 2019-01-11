import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Game from './GameComponent';
import Hall from './HallComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/hall" component={Hall} />
            <Route exact path="/game" component={Game} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;