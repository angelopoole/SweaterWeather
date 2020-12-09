import React from 'react';

const Temperature = props => {
	return (
		<>
			<p>
				HIGH: {props.highTemp} LOW: {props.lowTemp}
			</p>
		</>
	);
};

export default Temperature;
