import React from 'react';
import Temperature from './Temp/Temperature';
import WeatherImage from './WeatherImage/WeatherImage';

const Day = props => {
	return (
		<div>
			<WeatherImage weatherImgCode={props.weatherImgCode} />
			<Temperature lowTemp={props.lowTemp} highTemp={props.highTemp} />
		</div>
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
