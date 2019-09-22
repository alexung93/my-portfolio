import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from 'react-bootstrap';

const SectionContainer = styled.section`
	// border-bottom: 1px solid #99ddff;
`;

const StyledContainer = styled.div`
	margin: 2%;
	padding: 5%;
	display: flex;
	width: 100%;
	height: 60vh;
	border-radius: 10px;
	background-color: #FFFFFF !important;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  children: PropTypes.node.isRequired,
}

export default Section;