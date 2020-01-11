import React, { useState } from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const PortfolioNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-z" color="light" light expand="md">
        <NavbarBrand className="navbarbrand-z" href="/">
          Zach Selindh
        </NavbarBrand>
        <NavbarText>Full Stack Developer</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink color="dark" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="#" href="https://github.com/ZachSelindh">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default PortfolioNavbar;
