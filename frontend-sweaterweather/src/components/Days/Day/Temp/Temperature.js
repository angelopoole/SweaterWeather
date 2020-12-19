import { useSelector } from 'react-redux';
import styled from 'styled-components';

let TempDiv = styled.div`
	/* background-color: brown; */
	&.temp {
		background-color: brown;
	}
`;

const Temperature = props => {
	let scaleCelcius = useSelector(state => state.weatherReducer.scaleCelcius);
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);
	let scale = scaleCelcius ? 'C' : 'F';

	return (
		<TempDiv>
			<div>
				HIGH: {scaleCelcius ? props.highTemp : highFaren}°{scale} <br />
				LOW: {scaleCelcius ? props.lowTemp : lowFaren}°{scale}
			</div>
		</TempDiv>
	);
};

export default Temperature;
