import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import Hall from './HallComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/crewapp" component={Home} />
            <Route exact path="/hall" component={Hall} />
            <Route exact path="/game" component={Game} />
            <Redirect to="/crewapp" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;