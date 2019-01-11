import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Hello, Crew!</h1>
      <p className="lead">Etais-tu trop bourr&eacute; ou sauras-tu t'en rappeler???</p>
      <hr className="my-2" />
      <h4>Regles du jeu</h4>
      <p>30 secondes pour deviner un maximum de locations des photos qui te seront pr&eacute;sent&eacute;es.</p>
      <p className="lead">
        <Button color="primary">GO</Button>
      </p>
    </Jumbotron>
  </div>
)

export default Home;