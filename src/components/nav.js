import React from "react";
import { Navbar, Nav, Button, Container, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from 'styled-components';
import logo from "../images/alex-icon.png";
import { Link } from "gatsby";

const StyledImg = styled.img`
  margin-top: -37px;
  height: 60px;
`;

const StyledNavBar = styled(Navbar)`
  height: 65px;
  background-color: #212121;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledBrand = styled(Navbar.Brand)`
  margin-top:1.8%;
`;

const marginLeft = {
  marginLeft: "15%",
};

const marginRight = {
  marginRight: "10%",
};

const NavLinksMiddle = [
  { name: "Story", to: "#story" },
  { name: "Experience", to: "#experience" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" },
  { name: "Resume", to: "#resume"},
];

const NavLinksRight = [
  { name: <FaGithub size={25}/>, to: "https://github.com/alexung93" },
  { name: <FaLinkedin size={25}/>, to: "https://www.linkedin.com/in/alexanderung/" },
  { name: <IoIosMail size={25}/>, to: "mailto:alexung93@gmail.com" },
];

const NavMiddle = () =>
  NavLinksMiddle.map((link, index) => (
    <Nav.Link className="navlink" key={index} href={link.to}>
      {link.name}
    </Nav.Link>
  ));

const NavRight = () =>
  NavLinksRight.map((link, index) => (
    <Nav.Link className="navlink" key={index} href={link.to}>
      {link.name}
    </Nav.Link>
  ));

class NavBar extends React.Component {
  render() {
    return (
      <Container> 
        <StyledNavBar collapseOnSelect expand="lg" fixed="top">
          <StyledBrand style={marginLeft} href="#home">
            <StyledImg src={ logo } alt="Logo"/>
          </StyledBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <StyledNavBar.Collapse id="responsive-navbar-nav">
            <Nav color="white" className="ml-auto">
              <NavMiddle />
            </Nav>
            <Nav style={marginRight} className="ml-auto">
              <NavRight />
            </Nav>
          </StyledNavBar.Collapse>
        </StyledNavBar>
      </Container>
    );
  }
}

export default NavBar;