const getLocation = () => {
	let location = {};
	let success = pos => {
		const crd = pos.coords;
		location = { latitude: crd.latitude, longitude: crd.longitude };
	};
	const result = navigator.geolocation.getCurrentPosition(success);
	return result;
};

// const getLocation = () => {
// };

export default getLocation;
