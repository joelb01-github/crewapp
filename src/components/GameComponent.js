import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { questions } from '../assets/questions';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      points: 0
    };

    this.toggleNextQuestion = this.toggleNextQuestion.bind(this);
  }

  toggleNextQuestion() {
    if (this.state.counter === 2) {
      // launch end screen
    }
    else {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  render() {
    const answers = questions[this.state.counter].answers;

    const QuestionCard = () => {
      return(
        <Card className="salvicard">
          <CardImg top className="img-fluid" src={questions[this.state.counter].src} alt="Card image" />
          <CardBody>
            <CardTitle>C'etait ou?</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>This is the question...</CardText>
            <div className="row justify-content-center">
              {answersCard}
            </div>
          </CardBody>
        </Card>
      );
    }

    const answersCard = answers.map((answer) => {
      return (
        <Button outline block color="secondary" 
        onClick={this.toggleNextQuestion}>
          {answer}
        </Button>
      );
    });
    
    return (
      <div className="container fluid">
        <div className="row justify-content-center">
          <QuestionCard />
        </div>
      </div>
    );
  }
}

export default Game;