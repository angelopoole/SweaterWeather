//libs
import React, { useEffect, useState } from 'react';

//components
import Days from '../components/Days/Days';
import Loader from '../components/Loader/Loader';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../Redux/Actions/weatherAction';

// The Sweater page takes in components from days and uses it to display date, weather and sweater status

const SweaterPage = () => {
	const dispatch = useDispatch();
	const location = useSelector(state => state.weatherReducer.location);
	const weekWeather = useSelector(state => state.weatherReducer.weekly);
	const [locationPermission, setLocationPermission] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// toDo: reorganize location permission gathering, use permissionStatus
	// todo: prompt user before asking for location so as to create proper bond
	// todo: create modal to ask for permission
	// todo: create loader so app doesnt crash on init
	// todo: create loader component for loading while awaiting location.
	// todo: memoize days component, currently each day is loading in at different times and causing 5 re-renders of the application

	// i want to create something that takes in redux state and sets it to localstorage in order to populate the website faster.

	//

	// console.log(navigator.permissions.query);

	const queryGeoPermissions = async () => {
		let permissionStatus = await navigator.permissions.query({
			name: 'geolocation',
		});

		console.log(permissionStatus);
	};

	// console.log(weekWeather);

	// queryGeoPermissions();

	const handleAskForLocationPermission = userResponse => {};

	useEffect(() => {});

	// Get current latitude and longitude. Sets location state
	useEffect(() => {
		const options = {
			enableHighAccuracy: false,
		};
		const success = pos => {
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
		console.log('hit');
		navigator.geolocation.getCurrentPosition(success, error, options);
	}, [dispatch]);

	// ping api for weather data based on current location. Sets weather state
	useEffect(() => {
		const getFiveDayForcast = async location => {
			const { latitude, longitude } = location;
			await dispatch(getWeather(latitude, longitude));
			setIsLoading(false);
		};
		if (location.latitude === '') {
			return;
		} else {
			getFiveDayForcast(location);
		}
	}, [location, dispatch]);

	if (isLoading) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<>
			<Days fiveDayWeather={weekWeather} />
		</>
	);
};

export default SweaterPage;
