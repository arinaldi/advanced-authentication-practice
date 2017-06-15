import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthLinks = () => (
  <Nav pullRight>
    <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
    <Link to="/hidden"><Navbar.Text>Hidden</Navbar.Text></Link>
    <Link to="/cloaked"><Navbar.Text>Cloaked</Navbar.Text></Link>
  </Nav>
);

const TopNavbar = (props) => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        { (props.showNavItems) ? <AuthLinks /> : null }
      </Navbar.Collapse>
    </Navbar>
);

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
