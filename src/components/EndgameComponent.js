import React, { Component } from 'react';
import Hall from './HallComponent';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router';
import { addScore } from '../firebase/actions'

class Endgame extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    addScore(
      date.toLocaleDateString("en-GB"),
      this.state.value,
      this.props.points
    );
    this.setState({ redirect: true });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/hall" />;
    }
    else {
      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <p>Your score is: {this.props.points}</p>
              <p>Add you name to the Hall of Fame</p>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="nickname">Nickname</Label>
                  <Input type="textarea" rows="1" name="nickname" id="nickname" value={this.state.value} onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
            <div className="col-12 col-md-5 m-1">
              <Hall />
            </div>
          </div>
        </div>
      );
    }
  }

}

export default Endgame;