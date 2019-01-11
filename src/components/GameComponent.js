import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const items = [];

class Game extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="container fluid">
        <div className="row justify-content-center">
          <Card className="salvicard">
            <CardImg top className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/confusionserver-956e4.appspot.com/o/images%2Fcrewapp%2F2007tignes1.jpg?alt=media&token=ac04a7b8-9fa8-4ccf-8eaa-9e34cb772b32" alt="Card image" />
            <CardBody>
              <CardTitle>Question X</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>This is the question.</CardText>
              <div className="row justify-content-center">
                <Button outline color="secondary">Choice 1</Button>
                <Button outline color="secondary">Choice 2</Button>
                <Button outline color="secondary">Choice 3</Button>
                <Button outline color="secondary">Choice 4</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Game;