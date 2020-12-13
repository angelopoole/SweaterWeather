import React from 'react';
import styled from 'styled-components';

import classes from './Temperature.module.css';

const TempWrapper = styled.div`
	background-color: transparent;
	color: black;
`;

const Temperature = props => {
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);

	return (
		<TempWrapper>
			HIGH: {highFaren} <br />
			LOW: {lowFaren}
		</TempWrapper>
	);
};

export default Temperature;
