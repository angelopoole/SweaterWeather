import React from 'react';
import styled from 'styled-components';

const DarkenedBackground = styled.div`
	background-color: black;
	opacity: 0.5 !important;
	z-index: 200;

	overflow: visible;
`;

// todo make darken background viable, currently doesnt work as a helper util function
// * for use in models

const DarkenBackground = props => {
	return <DarkenedBackground>{props.children}</DarkenedBackground>;
};

export default DarkenBackground;
