//libs
import React, { useEffect } from 'react';

//components
import Days from '../components/Days/Days';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../Redux/Actions/weatherAction';

// The Sweater page takes in components from days and uses it to display date, weather and sweater status

const SweaterPage = () => {
	const dispatch = useDispatch();
	const location = useSelector(state => state.weatherReducer.location);
	const weekWeather = useSelector(state => state.weatherReducer.weekly);

	// i want to create something that takes in redux state and sets it to localstorage in order to populate the website faster.

	//

	// Get current latitude and longitude. Sets location state
	useEffect(() => {
		let options = {
			enableHighAccuracy: true,
		};
		let success = pos => {
			const crd = pos.coords;
			let payload = {
				latitude: crd.latitude.toFixed(0),
				longitude: crd.longitude.toFixed(0),
			};

			dispatch({
				type: 'SET_LOCATION',
				payload,
			});
		};
		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	}, [dispatch]);

	// ping api for weather data based on current location. Sets weather state
	useEffect(() => {
		const getFiveDayForcast = async location => {
			const { latitude, longitude } = location;
			dispatch(getWeather(latitude, longitude));
		};
		if (location.latitude === '') {
			return;
		} else {
			getFiveDayForcast(location);
		}
	}, [location, dispatch]);

	return (
		<>
			<Days fiveDayWeather={weekWeather} />
		</>
	);
};

export default SweaterPage;
