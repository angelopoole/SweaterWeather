import React, { useState, useEffect } from 'react';
import api from '../default-axios-instance';
import Days from '../components/Days/Days';

import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../Redux/Actions/weatherAction';
// import styled from 'styled-components';

// The Sweater page takes in components from days and uses it to display date, weather and sweater status

const SweaterPage = () => {
	const dispatch = useDispatch();
	const location = useSelector(state => state.weatherReducer.location);
	console.log({ location: location });
	let [weather, setWeather] = useState();
	// let [location, setLocation] = useState({ latitude: '', longitude: '' });
	const [isFarenheight, setIsFarenheight] = useState(true);

	const handleTempChange = () => {
		setIsFarenheight(stateBefore => !stateBefore);
	};

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
	}, []);

	// ping api for weather data based on current location. Sets weather state
	useEffect(() => {
		const getFiveDayForcast = async location => {
			const { latitude, longitude } = location;
			const res = await api.get(
				`daily?days=5&lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WEATHER_API}`
			);
			if (res.data.data) {
				setWeather(res.data.data);
			}
		};
		console.log(location);
		if (location.latitude === '') {
			return;
		} else {
			getFiveDayForcast(location);
		}
	}, [location]);

	// Debug button, lets me check state and weather.
	let locationLogger = () => {
		console.log(location);
		console.log(weather);
	};

	return (
		<>
			<Days
				fiveDayWeather={weather}
				isFarenheight={isFarenheight}
				handleTempChange={handleTempChange}
			/>
		</>
	);
};

export default SweaterPage;
