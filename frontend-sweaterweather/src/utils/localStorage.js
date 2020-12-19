// loads state from localStorage. this goes into store.js in reducer file
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

// saves state to local storage, this goes into index where store is initialized.
export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);

		localStorage.setItem('state', serializedState);
	} catch {
		// ignore write errors
	}
};
