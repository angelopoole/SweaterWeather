import api from '../../default-axios-instance';
import { GET_WEATHER, FLIP_SCALE, GET_HOURLY } from '../types';

export const getWeather = (latitude, longitude) => {
	return async dispatch => {
		try {
			const res = await api.get(
				`daily?days=5&lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WEATHER_API}`
				// `daily?days=5&city=${city}&key=${process.env.REACT_APP_WEATHER_API}`
			);

			const hourly = await api.get(
				`hourly?hours=12&lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WEATHER_API}`
			);

			const hourlyData = await hourly.data.data;
			const resData = await res.data.data;

			dispatch({
				type: GET_WEATHER,
				payload: resData,
			});

			dispatch({
				type: GET_HOURLY,
				payload: hourlyData,
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const flipScale = () => {
	return {
		type: FLIP_SCALE,
	};
};
