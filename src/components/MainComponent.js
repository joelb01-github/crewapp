import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { addScore, fetchScores } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import Hall from './HallComponent';
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
    const HallPage = () => {
      return (
        <Hall 
          scores = {this.props.scores.scores}
          errMsg = {this.props.scores.errMsg}
          isLoading = {this.props.scores.isLoading} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/crewapp" component={Home} />
            <Route exact path="/hall" component={HallPage} />
            <Route exact path="/game" component={Game} />
            <Redirect to="/crewapp" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispactchToProps)(Main);