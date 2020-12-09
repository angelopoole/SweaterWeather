import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import getLocation from '../utils/GetLocation';

const SweaterPage = () => {
	const [weather, setWeather] = useState();
	const [location, setLocation] = useState({ latitude: '', longitude: '' });

	let success = pos => {
		const crd = pos.coords;
		setLocation({ latitude: crd.latitude, longitude: crd.longitude });
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	useEffect(() => {}, []);

	let locationLogger = () => {
		console.log(location);
		console.log(process.env.WEATHER_URL_FROM_GEOLOCATION);
	};

	return (
		<div>
			<button onClick={locationLogger}> log location </button>
		</div>
	);
};

export default SweaterPage;
