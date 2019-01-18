import React from 'react';
import { Table } from 'reactstrap';
import { Loading } from './LoadingComponent';

const RenderScores = ({ scores }) => {

  const scoresSorted = scores.sort((a,b) => b.score - a.score)
  // eslint-disable-next-line
  .map((score, index) => {
    if (index < 20) {
      return (
        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{score.name}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  });

  return(
    <tbody>
      {scoresSorted}
    </tbody>
  );

}

const Hall = (props) => {
  if (props.isLoading) {
    return (
      <Loading />
    )
  }
  else if (props.errMess) {
    return (
      <h4>{props.errMess}</h4>
    )
  }
  else {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Crew Member</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <RenderScores scores={props.scores} />
      </Table>
    );
  }
}

export default Hall;