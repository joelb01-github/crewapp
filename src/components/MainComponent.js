import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fetchScores } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import Hall from './HallComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
}

const mapDispactchToProps = dispatch => {
  return {
    fetchScores: () => { dispatch(fetchScores()) }
  };
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchScores();
  }

  render() {

    const HallPage = ({location}) => {
      return (
        <Hall
          points={location.state.points}
          fromGame={location.state.fromGame} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/crewapp" component={() => <Home />} />
            <Route exact path="/hall/:from" component={HallPage} />
            <Route exact path="/game" component={() => <Game />} />
            <Redirect to="/crewapp" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispactchToProps)(Main));