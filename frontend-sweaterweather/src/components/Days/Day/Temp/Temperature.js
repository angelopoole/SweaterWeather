import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TempWrapper = styled.div`
	/* background-color: transparent; */
	/* color: black; */
`;

const Temperature = props => {
	let scaleCelcius = useSelector(state => state.weatherReducer.scaleCelcius);
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);
	let scale = scaleCelcius ? 'C' : 'F';

	return (
		<TempWrapper>
			HIGH: {scaleCelcius ? props.highTemp : highFaren}°{scale} <br />
			LOW: {scaleCelcius ? props.lowTemp : lowFaren}°{scale}
		</TempWrapper>
	);
};

export default Temperature;
