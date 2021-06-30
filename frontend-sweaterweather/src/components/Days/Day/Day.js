//Libs
import React from 'react';
import styled from 'styled-components';

//Components
import Temperature from './Temp/Temperature';
import WeatherImage from './WeatherImage/WeatherImage';

//Redux

// TODO check to see if day component date props is the same as the current day, highlight day  -> #ffc800 color for only that day.

const DayWrapper = styled.div`
	background-color: ${props =>
		props.isToday ? 'hsl(39, 100%, 62%)' : 'rgba(245, 245, 245, 0.65)'};
	border-radius: 3rem;
	min-height: 25rem;
	width: 80%;
	margin: 5px 15px;
	/* padding: 0.09px 40px; */
	transition: 0.3s all ease;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
		0 0 40px rgba(128, 128, 128, 0.1) inset;

	&:hover {
		cursor: pointer;
		box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
	}

	em {
		display: inline-block;
		margin-top: 0.5rem;
	}

	#temperature-div {
		margin-top: 2rem;
	}
`;

const celciusToFarenheight = celTemp => {
	let farenheight = celTemp * 1.8 + 32;
	return farenheight.toFixed();
};

const Day = props => {
	const { weatherImgCode, date, lowTemp, highTemp } = props;
	const todaysDate = new Date().toDateString().split('').splice(0, 10).join('');
	const longDate = new Date(date)
		.toDateString()
		.split('')
		.splice(0, 10)
		.join('');

	const isToday = todaysDate === longDate ? true : false;

	return (
		<DayWrapper isToday={isToday}>
			<WeatherImage weatherImgCode={weatherImgCode} /> <br />
			<em>{longDate}</em>
			<Temperature
				conversion={celciusToFarenheight}
				lowTemp={lowTemp}
				highTemp={highTemp}
			/>
		</DayWrapper>
	);
};

export default Day;
