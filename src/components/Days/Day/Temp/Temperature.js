import React from 'react';
import styled from 'styled-components';

import classes from './Temperature.module.css';

const TempWrapper = styled.div`
	background-color: transparent;
	color: black;
`;

const Temperature = props => {
	return (
		<TempWrapper>
			HIGH: {props.highTemp} <br />
			LOW: {props.lowTemp}
		</TempWrapper>
	);
};

export default Temperature;
