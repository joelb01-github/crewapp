import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { addScore, fetchScores } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import HallComponent from './HallComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    comments: state.comments,
    scores: state.scores
  };
}

const mapDispactchToProps = dispatch => {
  return {
    addScore: (newScore) => { dispatch(addScore(newScore)) },
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
        <HallComponent 
          addScore={this.props.addScore}
          points={location.state.points}
          fromGame={location.state.fromGame}
          scores={this.props.scores.scores} 
          isLoading={this.props.scores.isLoading} 
          errMess={this.props.scores.errMess} />
      );
    };

    const GamePage = () => {
      return (
        <Game 
          scores={this.props.scores} />
      );
    };


    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/crewapp" component={Home} />
            <Route exact path="/hall/:from" component={HallPage} />
            <Route exact path="/game" component={GamePage} />
            <Redirect to="/crewapp" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispactchToProps)(Main));