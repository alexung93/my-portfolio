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
              <Nav.Link className="navlink" href="#about-me">About Me</Nav.Link>
              <Nav.Link className="navlink" href="#experience">Experience</Nav.Link>
              <Nav.Link className="navlink" href="#projects">Projects</Nav.Link>
              <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
              <Nav.Link className="navlink">Resume</Nav.Link>
            </Nav>
            <Nav style={marginRight} className="ml-auto">
              <Nav.Item>
                <Nav.Link className="navlink" href="https://github.com/alexung93"><FaGithub size={25}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink" href="https://www.linkedin.com/in/alexanderung/"><FaLinkedin size={25}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navlink" href="mailto:alexung93@gmail.com"><IoIosMail size={25}/></Nav.Link>
                </Nav.Item>
              </Nav>
          </StyledNavBar.Collapse>
        </StyledNavBar>
      </Container>
    );
  }
}

export default NavBar;