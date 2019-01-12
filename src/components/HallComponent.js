import React from 'react';
import { Table } from 'reactstrap';
import { hall } from '../assets/halloffame';

const Hall = () => (
  <div>
    <RenderTable />
  </div>
);

const RenderTable = () => {
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
      <tbody>
        {players}
      </tbody>
    </Table>
  );
}

const players = hall.sort((a,b) => b.score - a.score)
.map((player, index) => {
  if (index < 20) {
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{player.name}</td>
        <td>{player.score}</td>
        <td>{(new Date(player.date)).toLocaleDateString('en-GB')}</td>
      </tr>
    );
  }
});

export default Hall;