import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../images/alex-icon.png";

/**
  * Navigation bar 
  */

const StyledImg = styled.img`
  height: 60px;
`;

const StyledNavBar = styled(Navbar)`
  height: 90px;
  background-color: #212121;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledBrand = styled(Navbar.Brand)`
`;

const marginLeft = {
  marginLeft: "15%",
};

const marginRight = {
  marginRight: "10%",
};

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 100ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 100ms ease-out;
    transform: translate(0, -100%);
  }
`;

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
    
  render() {
    const { middlelinks, rightlinks } = this.props;

    const NavMiddle = () =>
      middlelinks.map((link, index) => (
        <Nav.Link className="navlink" key={index} href={link.to}>
          {link.name}
        </Nav.Link>
      ));

    const NavRight = () =>
      rightlinks.map((link, index) => (
        <Nav.Link className="navlink" key={index} href={link.to}>
          {link.name}
        </Nav.Link>
      ));

    return (
      <Transition>
        <Container> 
          <StyledNavBar className={this.state.show ? "active" : "hidden"} collapseOnSelect expand="lg" fixed="top">
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
      </Transition>
    );
  }
}

export default NavBar;