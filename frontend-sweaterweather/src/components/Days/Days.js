import React from 'react';
import styled from 'styled-components';

import Day from './Day/Day';

// Takes in day and creates multiple based on the weather data being passed to it.

const DaysWrapper = styled.div`
	/* Mobile devices & base */
	display: flex;
	flex-flow: column;
	height: auto;

	background: linear-gradient(
		130deg,
		#83c7dd 20%,
		rgb(50, 182, 226) 50%,
		rgb(31, 157, 199) 100%
	);
	align-items: center;
	margin: auto;
	overflow: scroll;
	text-align: center;
	font-size: 1.2rem;
	overflow-y: scroll;

	/* if the device is a desktop -> */
	@media (min-width: 500px) {
		overflow-y: hidden;
		flex-flow: row;
		width: auto;
		height: 100vh;
	}
`;

const Days = props => {
	let days;

	if (props.fiveDayWeather) {
		days = props.fiveDayWeather.map(day => {
			return (
				<Day
					key={day.datetime}
					date={day.datetime}
					dayDescription={day.weather.description}
					lowTemp={day.low_temp}
					highTemp={day.high_temp}
					weatherImgCode={day.weather.icon}
				/>
			);
		});
	}

	return <DaysWrapper>{days}</DaysWrapper>;
};

export default Days;
