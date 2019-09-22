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
// import splash from "../images/img.jpg";


import { Container, Col } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Lato";
    background-color: #EEE !important;
    color: #545454 !important;
    padding-top: 2%;
  }

  a:hover {
    color: white !important;
  }

  .navlink {
    color: #FFFFFF !important;
  }
  
  .nav > li > a:hover{
    background-color:#FFD8B5 !important;
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
`;

// const StyledBackground = styled.div`
//   height: 350px;
//   background-image: url(${splash});
//   background-position: top center;
//   background-size: cover;
//   -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
//   filter: grayscale(60%);
//   z-index: -1;
//   position: relative;
// `;

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <GlobalStyle />
        <NavBar/>

        <Container>
          <main>{children}</main>
        </Container>
        <footer style={{ padding: "10px 0px 10px 0px" }}className="text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
