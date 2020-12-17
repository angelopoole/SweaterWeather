import styled from 'styled-components';

const TempWrapper = styled.div`
	/* background-color: transparent; */
	/* color: black; */
`;

const Temperature = props => {
	let highFaren = props.conversion(props.highTemp);
	let lowFaren = props.conversion(props.lowTemp);

	return (
		<TempWrapper>
			HIGH: {props.isFarenheight ? highFaren : props.highTemp}° <br />
			LOW: {props.isFarenheight ? lowFaren : props.lowTemp}°
		</TempWrapper>
	);
};

export default Temperature;
