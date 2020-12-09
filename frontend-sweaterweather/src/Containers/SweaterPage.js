import React, { useState, useEffect } from 'react';

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


  
	useEffect(() => {
    

    api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
	}, []);

	let locationLogger = () => {
		console.log(location);
	};

	return (
		<div>
			<button onClick={locationLogger}> log location </button>
		</div>
	);
};

export default SweaterPage;
