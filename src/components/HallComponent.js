import React, { Component } from 'react';
import { Table, Modal, ModalHeader, ModalBody, Row, Button, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Error } from './ErrorComponent';
import { LocalForm, Control } from 'react-redux-form';
import { connect } from 'react-redux';
import { addScore } from '../redux/ActionCreators';

const mapStateToProps = state => ({ scores: state.scores });

const mapDispactchToProps = dispatch => {
  return {
    addScore: (newScore) => { dispatch(addScore(newScore)) }
  };
}

class HallComponent extends Component {

  render() {
    return(
      <>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Crew Member</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <ScoresSorted scores={this.props.scores} />
          </tbody>
        </Table>
        <div>
          <ScoreForm 
            scores={this.props.scores}
            points={this.props.points}
            fromGame={this.props.fromGame}
            addScore={this.props.addScore} />
        </div>
      </>
    );
  }

}

const ScoresSorted = (props) => {
  if (props.scores.isLoading) { return ( <Loading /> ); }
  else if (props.scores.errMess) { return ( <Error errMess={props.scores.errMess} /> ); }
  else {
    return props.scores.scores.sort((a,b) => b.score - a.score)
    // eslint-disable-next-line
    .map((score, index) => {
      if (index < 20) {
        return (
          <tr key={score.id}>
            <th scope="row">{index+1}</th>
            <td>{score.name}</td>
            <td>{score.score}</td>
            <td>{score.date}</td>
          </tr>
        );
      }
    });
  }
}

class ScoreForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isModalOpen: this.props.fromGame
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(values) {
    this.toggleModal();
    const date = new Date();
    this.props.addScore({
      date: date.toLocaleDateString("en-GB"),
      name: values.name,
      score: this.props.points
    });
  }
  
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return(
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Score</ModalHeader>
          <ModalBody>
            <p>Your score is: {this.props.points}</p>
            <p>Add you name to the Hall of Fame</p>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name">Nickname</Label>
                <Control.text model=".name" id="name" name="name" placeholder="Your Name" className="form-control"  />
              </Row>
              <Row className="form-group">
                <Button type="submit">Submit</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }

}

export default connect(mapStateToProps, mapDispactchToProps)(HallComponent);