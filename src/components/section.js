import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
	* Styled section component
	*/
const SectionContainer = styled.section`
	border-bottom: 1px solid #D8D8D8;
`;

const StyledContainer = styled.div`
	margin: 1.5%;
	padding: 4%;
	display: flex;
	width: 100%;
	border-radius: 10px;
	display: inline-block;
`

const Section = ({ children }) => {
	return (
		<SectionContainer>
			<StyledContainer>
				<main>{children}</main>
			</StyledContainer>
		</SectionContainer>
		
	);
	
}

Section.propTypes = {
	/** The children that will inherit the style of the section */
  children: PropTypes.node.isRequired,
}

export default Section;