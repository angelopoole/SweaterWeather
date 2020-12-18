const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'INCREMENT_ONE':
			console.log({ type, payload });
			console.log({ state });
			return { count: state.count + 1 };

		default:
			return state;
	}

	function incrementor(number) {
		let res = state.count + number;
	}
};

export default counterReducer;
