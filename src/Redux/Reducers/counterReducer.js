const initialState = {
	index: null,
	count: 0,
};

const counterReducer = (state = initialState, { type, payload, index }) => {
	switch (type) {
		case 'INCREMENT_ONE':
			console.log(index);

			return { ...state, count: state.count + 1, index: index };

		default:
			return state;
	}
};

export default counterReducer;
