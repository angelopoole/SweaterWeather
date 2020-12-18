let initialState = {
	location: { latitude: '', longitude: '' },
	weekly: null,
	monthly: [{}],
	temperature: {
		farenheight: { low: 0, high: 0 },
		celcius: { low: 0, high: 0 },
	},
	scaleFarenheight: true,
};

const weatherReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_LOCATION':
			return { ...state, location: payload };
		case 'GET_WEATHER':
			return {
				...state,
				weekly: payload,
			};

		default:
			return state;
	}
};

export default weatherReducer;
