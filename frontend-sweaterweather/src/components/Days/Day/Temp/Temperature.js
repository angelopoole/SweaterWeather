import { useSelector } from 'react-redux';

const Temperature = props => {
	let scaleCelcius = useSelector(state => state.weatherReducer.scaleCelcius);
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);
	let scale = scaleCelcius ? 'C' : 'F';

	let clothingChoice;

	if (lowFaren <= 55) {
		clothingChoice = <p> WEAR A COAT 🧥 </p>;
	} else if (lowFaren <= 65 && lowFaren > 55) {
		clothingChoice = <p> ITS SWEATER WEATHER 🍂 </p>;
	} else {
		clothingChoice = <p> LOOKS SUNNY ☀️ </p>;
	}

	// console.log({ lowFaren, highFaren });

	//// let clothingChoice = () => {
	//// };

	return (
		<>
			<div>
				HIGH: {scaleCelcius ? props.highTemp : highFaren}°{scale} <br />
				LOW: {scaleCelcius ? props.lowTemp : lowFaren}°{scale}
			</div>
			{clothingChoice}
		</>
	);
};

export default Temperature;
