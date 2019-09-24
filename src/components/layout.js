/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from './nav';
import Header from "./header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Container } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

/**
  * The layout of the website 
  */

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Lato";
    background-color: #EEE;
    color: #545454;
    padding-top: 2%;
  }

  a:hover {
    color: white;
  }

  .navlink {
    color: #FFFFFF !important;
  }

  .navlink:hover {
    color: #FFD8B5 !important;
  }
  
  .tab-content > .tab-pane:not(.active),
  .pill-content > .pill-pane:not(.active) {
      display: block;
      height: 0;
      overflow-y: hidden;
  } 

  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #FFD8B5;
  }

  .nav > li > a:hover{
    background-color: #FFD8B5;
  }

`;

const navLinksMiddle = [
  { name: "Story", to: "#story" },
  { name: "Experience", to: "#experience" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" },
  { name: "Resume", to: "#resume"},
];

const navLinksRight = [
  { name: <FaGithub size={25}/>, to: "https://github.com/alexung93" },
  { name: <FaLinkedin size={25}/>, to: "https://www.linkedin.com/in/alexanderung/" },
  { name: <IoIosMail size={25}/>, to: "mailto:alexung93@gmail.com" },
];

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

const footerPadding = {
  padding: "10px 0px 10px 0px",
  };

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <GlobalStyle />
        <NavBar middlelinks={navLinksMiddle} rightlinks={navLinksRight} />

        <Container>
          <main>{children}</main>
        </Container>
        <footer style={ footerPadding } className="text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
    </>
  )
};

Layout.propTypes = {
  /** The children to be displayed using the layout */
  children: PropTypes.node.isRequired,
};

export default Layout;
