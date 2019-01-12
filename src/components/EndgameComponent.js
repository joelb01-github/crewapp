import React from 'react';
import Hall from './HallComponent';

const Endgame = (props) => (
  <div>
    <p>Your score is: {props.points}</p>
    <Hall />
  </div>
);

export default Endgame;