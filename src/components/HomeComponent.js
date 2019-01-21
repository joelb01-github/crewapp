import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Hello, Crew!</h1>
      <p className="lead">Etais-tu trop bourr&eacute; ou sauras-tu t'en rappeler???</p>
      <hr className="my-2" />
      <h4>Regles du jeu</h4>
      <p>10 questions sur les photos qui te seront pr&eacute;sent&eacute;es.</p>
      <p>1 bonne r&eacute;ponse = 1 point</p>
      <p>1 mauvaise r&eacute;ponse = - 0.5 point</p>
      <p className="lead">
        <Link to='/game'>
          <Button color="primary">GO</Button>
        </Link>
      </p>
    </Jumbotron>
  </div>
)

export default Home;