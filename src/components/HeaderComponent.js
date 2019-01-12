import React, { Component } from 'react';
import { Navbar, NavItem, NavbarBrand, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/crewapp">The Crew Game</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/crewapp">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/hall">
                  <span className="fa fa-trophy fa-lg"></span> Hall of Fame
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;