import React, { Component } from 'react';
import { Navbar, NavItem, NavbarBrand, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
          <NavbarBrand className="mr-auto" href="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/confusionserver-956e4.appspot.com/o/images%2FlogoENG1.png?alt=media&token=332ea851-f521-4b3d-bfd6-6d7987733926" height="41" width="41" alt="Chez Joel" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/hall">
                  <span className="fa fa-trophy fa-lg"></span> Hall of Fame
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <span className="fa fa-info fa-lg"></span> Contact
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