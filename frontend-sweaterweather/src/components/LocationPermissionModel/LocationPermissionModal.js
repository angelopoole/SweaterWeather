import React from 'react';
import styled from 'styled-components';
import DarkenBackground from '../util/DarkenBackground';

const LocationPermissionModalStyles = styled.div`
	z-index: 400;
	color: white;
	text-align: center;
	height: 100vh;
	margin-left: 4rem;
	margin-right: 4rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 3rem 3rem;
`;

const Button = styled.button`
	all: unset;
	border: transparent;
	border-radius: 2rem;
	background-color: ${props => (props.red ? 'red' : 'limeGreen')};
	color: white;
	font-size: large;
	margin: 1rem 1rem;
	height: 4rem;
	width: 8rem;
	/* cursor: pointer; */
`;

const LocationPermissionModal = ({ handleLocationPermissionResponse }) => {
	return (
		// <DarkenBackground>
		<LocationPermissionModalStyles>
			<h4>Allow location permissions?</h4>
			<p>
				This site needs your location in order to load the weather in your area.
				We please request your permission to access your location
			</p>
			<ButtonContainer>
				<Button onClick={() => handleLocationPermissionResponse('allow')}>
					Allow
				</Button>
				<Button red onClick={() => handleLocationPermissionResponse('deny')}>
					Deny
				</Button>
			</ButtonContainer>
		</LocationPermissionModalStyles>
		// </DarkenBackground>
	);
};

export default LocationPermissionModal;
