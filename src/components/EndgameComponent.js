import React from 'react';
import Hall from './HallComponent';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Endgame = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <p>Your score is: {props.points}</p>
        <p>Add you name to the Hall of Fame</p>
        <Form>
          <FormGroup>
            <Label for="nickname">Nickname</Label>
            <Input type="textarea" rows="1" name="nickname" id="nickname" />
          </FormGroup>
          {/* TODO: add onClick with controlled component */}
          <Link to="/hall"><Button>Submit</Button></Link>
        </Form>
      </div>
      <div className="col-12 col-md-5 m-1">
        <Hall />
      </div>
    </div>
  </div>
);

function addScore() {

}

export default Endgame;