// * libs
import React, { useEffect, useState, useCallback } from 'react';

// * components
import Days from '../components/Days/Days';
import Loader from '../components/Loader/Loader';
import LocationPermissionModal from '../components/LocationPermissionModel/LocationPermissionModal';

// * redux
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../Redux/Actions/weatherAction';

// * components

// The Sweater page takes in components from days and uses it to display date, weather and sweater status

const SweaterPage = () => {
	const dispatch = useDispatch();
	const location = useSelector(state => state.weatherReducer.location);
	const weekWeather = useSelector(state => state.weatherReducer.weekly);
	const [locationPermission, setLocationPermission] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// background modal will not show immediately, it will be set when asking user for permission to location.
	const [showBackgroundModal, setShowBackgroundModel] = useState(false);
	const [locationPermissionUserResponse, setLocationPermissionUserResponse] =
		useState(null);

	// todo: memoize days component, currently each day is loading in at different times and causing 5 re-renders of the application

	// i want to create something that takes in redux state and sets it to localstorage in order to populate the website faster.

	// console.log(navigator.permissions.query);

	const queryGeoPermissions = useCallback(async () => {
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
		const error = err => {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		};
		if (locationPermissionUserResponse === true) {
			//// console.log('locationPermissionUserResponse');
			setLocationPermission(null);
			return await navigator.geolocation.getCurrentPosition(
				success,
				error,
				options
			);
		}
		let permissionStatus = await navigator.permissions.query({
			name: 'geolocation',
		});
		setLocationPermission(permissionStatus.state);
		if (permissionStatus.state === 'granted') {
			return await navigator.geolocation.getCurrentPosition(success);
		} else if (permissionStatus.state === 'prompt') {
			//// console.log('prompt please');
			// ! here we want to flip state to allow for user to respond to our request
			setShowBackgroundModel(true);
		} else if (permissionStatus.state === 'denied') {
			console.warn('user has denied permissions');
		} else {
			console.log('not allowed on this browser');
		}

		//// console.log(permissionStatus);
	}, [dispatch, locationPermissionUserResponse]);

	const getFiveDayForcast = useCallback(
		async location => {
			const { latitude, longitude } = location;
			dispatch(getWeather(latitude, longitude));
			setIsLoading(false);
		},
		[dispatch]
	);

	const handleLocationPermissionResponse = async userAnswer => {
		if (userAnswer === 'allow') {
			setLocationPermissionUserResponse(true);
			setShowBackgroundModel(false);
		} else {
			setLocationPermissionUserResponse(false);
			// setNoLocationPermissions(true);
		}
	};

	// todo const handleAskForLocationPermission = userResponse => {};

	// * Get current latitude and longitude. Sets location state.
	// * This is using the navigation browser api
	useEffect(() => {
		if (!locationPermission || locationPermissionUserResponse) {
			queryGeoPermissions();
		}

		if (location.latitude === '') {
			console.warn('empty location');
		} else {
			// console.success('hit', locationPermission);
			getFiveDayForcast(location);
		}
	}, [
		queryGeoPermissions,
		getFiveDayForcast,
		locationPermission,
		location,
		locationPermissionUserResponse,
	]);

	console.log(weekWeather);

	if (locationPermissionUserResponse === false) {
		return (
			<>
				<main>
					website requires location permissions, please grant and reload.{' '}
				</main>
			</>
		);
	} else if (isLoading && showBackgroundModal === true) {
		return (
			<>
				<LocationPermissionModal
					handleLocationPermissionResponse={handleLocationPermissionResponse}
				/>
			</>
		);
	} else if (isLoading) {
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
