import React from 'react';
import classes from './Temperature.module.css';

const Temperature = props => {
	return (
		<div className={classes.Temperature}>
			HIGH: {props.highTemp} <br />
			LOW: {props.lowTemp}
		</div>
	);
};

export default Temperature;