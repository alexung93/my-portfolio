import PropTypes from "prop-types";
import React from "react";

/**
	* The header of the website
	*/
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
  </header>
)

Header.propTypes = {
	/** The title of the website */
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
