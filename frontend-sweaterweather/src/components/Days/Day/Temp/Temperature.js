import { useSelector } from 'react-redux';

const Temperature = props => {
	let scaleCelcius = useSelector(state => state.weatherReducer.scaleCelcius);
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);
	let scale = scaleCelcius ? 'C' : 'F';

	let clothingChoice = () => {
		if (lowFaren <= 55) {
			return <p> WEAR A COAT 🧥 </p>;
		} else if (lowFaren <= 65 && lowFaren > 55) {
			return <p> ITS SWEATER WEATHER 🍂 </p>;
		}
	};

	return (
		<>
			<div>
				HIGH: {scaleCelcius ? props.highTemp : highFaren}°{scale} <br />
				LOW: {scaleCelcius ? props.lowTemp : lowFaren}°{scale}
			</div>
			{clothingChoice()}
		</>
	);
};

export default Temperature;
