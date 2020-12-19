import {
	GET_WEATHER,
	FLIP_SCALE,
	SET_LOCATION,
	GET_HOURLY,
	SET_LOCALSTATE,
} from '../types';

let initialState = {
	location: { latitude: '', longitude: '' },
	weekly: null,
	hourly: null,
	temperature: {
		farenheight: { low: 0, high: 0 },
		celcius: { low: 0, high: 0 },
	},
	scaleCelcius: false,
};

const weatherReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOCATION:
			return { ...state, location: payload };
		case GET_WEATHER:
			return {
				...state,
				weekly: payload,
			};
		case FLIP_SCALE:
			return { ...state, scaleCelcius: !state.scaleCelcius };
		case GET_HOURLY:
			return { ...state, hourly: payload };
		case SET_LOCALSTATE:
			console.log(payload);
			return { ...state, payload };

		default:
			return state;
	}
};

export default weatherReducer;
