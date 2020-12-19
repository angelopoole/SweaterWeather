import React from 'react';
import styled from 'styled-components';

import Day from './Day/Day';

// Takes in day and creates multiple based on the weather data being passed to it.

const LayoutDiv = styled.div`
	height: 100vh;
	background: linear-gradient(
		130deg,
		#83c7dd 20%,
		rgb(50, 182, 226) 50%,
		rgb(31, 157, 199) 100%
	);
`;

const DaysWrapper = styled.div`
	/* Mobile devices & base */
	display: flex;
	flex-flow: column-reverse;
	background: transparent;
	height: 110vh;
	align-items: center;
	width: 100%;
	margin: auto;
	overflow: scroll;
	text-align: center;
	/* font-weight: bold; */
	font-size: 1.2rem;

	/* if the device is a desktop -> */

	@media (min-width: 500px) {
		background: linear-gradient(
			130deg,
			#83c7dd 20%,
			rgb(50, 182, 226) 50%,
			rgb(31, 157, 199) 100%
		);
		flex: 1;
		flex-flow: row;
		justify-content: center;
		/* background-color: rgb(173, 216, 230); */
	}
`;

const HourlyWrapper = styled.div`
	display: flex;

	height: 50vh;
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

	return (
		<DaysWrapper>
			{days} <br />
		</DaysWrapper>
	);
};

export default Days;
