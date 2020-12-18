let initialState = {
	location: { latitude: '', longitude: '' },
	Weekly: { day: '', time: '' },
	Monthly: [{}],
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

		default:
			return state;
	}
};

export default weatherReducer;
