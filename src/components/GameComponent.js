import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { questions } from '../assets/questions';
import Endgame from './EndgameComponent';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnd: false,
      counter: 0,
      points: 0
    };

    this.toggleNextQuestion = this.toggleNextQuestion.bind(this);
  }

  toggleNextQuestion(answer) {
    // check if answer is correct
    if (answer === questions[this.state.counter].solution){
      this.setState({
        points: this.state.points + 1
      });
    }

    else {
      this.setState({
        points: this.state.points - 0.5
      });
    }

    // change screen
    if (this.state.counter === questions.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    else {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  render() {
    const answers = questions[this.state.counter].answers;
    const question = questions[this.state.counter].question;
    const image = questions[this.state.counter].src;

    const QuestionCard = () => {
      return(
        <Card className="salvicard">
          <CardImg top className="img-fluid" src={image} alt="Card image" />
          <CardBody>
            <CardTitle>Question {this.state.counter+1}</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>{question}</CardText>
            <div className="row justify-content-center">
              {answersCard}
            </div>
          </CardBody>
        </Card>
      );
    }

    const answersCard = answers.map((answer, index) => {
      return (
        <Button key={index} outline block color="secondary" 
        onClick={() => {this.toggleNextQuestion(answer)}}>
          {answer}
        </Button>
      );
    });
    
    if (!this.state.isEnd) {
      return (
        <div className="container fluid">
          <div className="row justify-content-center">
            <QuestionCard />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container fluid">
          <div className="row justify-content-center">
            <Endgame points={this.state.points} />
          </div>
        </div>
      );
    }
  }
}

export default Game;