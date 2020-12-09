import React from 'react';

const WeatherImage = props => {
	return (
		<>
			<img
				src={`https://www.weatherbit.io/static/img/icons/${props.weatherImgCode}.png`}
				alt='weatherImage'
			/>
		</>
	);
};

export default WeatherImage;
