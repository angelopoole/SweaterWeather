export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			console.log('here');
			return undefined;
		}
		console.log('after passing');
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		console.log(state);
		localStorage.setItem('state', serializedState);
	} catch {
		// ignore write errors
	}
};
