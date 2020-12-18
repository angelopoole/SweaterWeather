//Libs
import React from 'react';
import styled from 'styled-components';

//Components
import Temperature from './Temp/Temperature';
import WeatherImage from './WeatherImage/WeatherImage';

//Redux
import { useDispatch, useSelector } from 'react-redux';

const DayWrapper = styled.div`
	flex: 1;
	background-color: whitesmoke;
	border-radius: 90px;

	margin: 0 15px;
	padding: 10px 50px;
	transition: 0.3s all ease;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
		0 0 40px rgba(128, 128, 128, 0.1) inset;

	&:hover {
		cursor: pointer;
		box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
	}
`;

const celciusToFarenheight = celTemp => {
	let farenheight = celTemp * 1.8 + 32;
	return farenheight.toFixed();
};

const Day = props => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counterReducer.count);

	const countIncrementHandler = () => {
		dispatch({ type: 'INCREMENT_ONE' });
	};

	return (
		<DayWrapper>
			<WeatherImage weatherImgCode={props.weatherImgCode} />
			{props.date}
			<Temperature
				isFarenheight={props.isFarenheight}
				conversion={celciusToFarenheight}
				lowTemp={props.lowTemp}
				highTemp={props.highTemp}
			/>
			<button onClick={countIncrementHandler}> {counter} </button>
		</DayWrapper>
	);
};

export default Day;

/* <Day
          key={day.datetime}
          dayDescription={day.weather.description}
          lowTemp={day.low_temp}
          highTemp={day.high_temp}
          weatherImgCode={day.weather.icon}
        /> */
