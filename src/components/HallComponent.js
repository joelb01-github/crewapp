import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { fetchLeaders } from '../firebase/actions';

class FetchLeaders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leaders: []
    };
  }

  componentDidMount() {
    fetchLeaders()
    .then(data => {
      let leaders = data.sort((a,b) => b.score - a.score)
      .map((leader, index) => {
        if (index < 20) {
          return (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{leader.name}</td>
              <td>{leader.score}</td>
              <td>{(new Date(leader.date)).toLocaleDateString('en-GB')}</td>
            </tr>
          );
        }
      });
      this.setState({ leaders: leaders });
    });
  }

  render() {
    return(
      <tbody>
        {this.state.leaders}
      </tbody>
    );
  }

}

const Hall = () => {
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
      <FetchLeaders />
    </Table>
  );
}

export default Hall;