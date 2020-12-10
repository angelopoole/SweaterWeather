import React from 'react';
import WeatherLogo from '../../Assets/images/SweaterWeather.png';
import classes from './Logo.module.css';

const Logo = () => {
	return (
		<div className={classes.Logo}>
			<img src={WeatherLogo} alt='MyBurger' />
		</div>
	);
};

export default Logo;
