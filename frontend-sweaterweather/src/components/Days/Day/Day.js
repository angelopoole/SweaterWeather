//Libs
import React from 'react';
import styled from 'styled-components';

//Components
import Temperature from './Temp/Temperature';
import WeatherImage from './WeatherImage/WeatherImage';

//Redux

const DayWrapper = styled.div`
	/* flex: 0 auto; */
	/* flex: 1; */
	background-color: rgba(245, 245, 245, 0.65);
	border-radius: 50px;
	width: auto;
	margin: 5px 15px;
	padding: 0.09px 40px;
	/* padding: 10px 50px; */
	transition: 0.3s all ease;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
		0 0 40px rgba(128, 128, 128, 0.1) inset;

	&:hover {
		cursor: pointer;
		box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
	}
`;

const celciusToFarenheight = celTemp => {
	let farenheight = celTemp * 1.8 + 32;
	return farenheight.toFixed();
};

const Day = props => {
	const { weatherImgCode, date, lowTemp, highTemp } = props;

	const longDate = new Date(date)
		.toDateString()
		.split('')
		.splice(0, 10)
		.join('');

	return (
		<DayWrapper>
			<WeatherImage weatherImgCode={weatherImgCode} /> <br />
			{longDate}
			{/* {date} */}
			<Temperature
				conversion={celciusToFarenheight}
				lowTemp={lowTemp}
				highTemp={highTemp}
			/>
		</DayWrapper>
	);
};

export default Day;
