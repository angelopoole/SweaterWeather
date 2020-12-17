import React from 'react';
import styled from 'styled-components';

import Day from './Day/Day';

// Takes in day and creates multiple based on the weather data being passed to it.

const DaysWrapper = styled.div`
	/* Mobile devices & base */
	display: flex;
	flex-flow: column-reverse;
	background: linear-gradient(
		130deg,
		#83c7dd 20%,
		rgb(50, 182, 226) 50%,
		rgb(31, 157, 199) 100%
	);
	height: 100vh;
	align-items: center;
	width: 100%;
	margin: auto;
	overflow: scroll;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;

	/* if the device is a desktop -> */

	@media (min-width: 500px) {
		flex: 1;
		flex-flow: row;
		justify-content: center;
		background-color: rgb(173, 216, 230);
	}
`;

const Days = props => {
	let days;

	if (props.fiveDayWeather) {
		days = props.fiveDayWeather.map(day => {
			return (
				<Day
					isFarenheight={props.isFarenheight}
					key={day.datetime}
					date={day.datetime}
					dayDescription={day.weather.description}
					lowTemp={day.low_temp}
					highTemp={day.high_temp}
					weatherImgCode={day.weather.icon}
				/>
			);
		});
	}

	return <DaysWrapper>{days}</DaysWrapper>;
};

export default Days;

// console.log({ dayDescription: day.weather.description });
// console.log({ low: day.low_temp, high: day.high_temp });
// console.log({ weatherImgCode: day.weather.icon });

// 0:
// app_max_temp: -0.6
// app_min_temp: -6.2
// clouds: 58
// clouds_hi: 17
// clouds_low: 44
// clouds_mid: 38
// datetime: "2020-12-09"
// dewpt: -1.9
// high_temp: 3.2
// low_temp: 0.3
// max_dhi: null
// max_temp: 3.5
// min_temp: -1.1
// moon_phase: 0.20242
// moon_phase_lunation: 0.86
// moonrise_ts: 1607497689
// moonset_ts: 1607540480
// ozone: 299.043
// pop: 0
// precip: 0
// pres: 1006.17
// rh: 79
// slp: 1008.68
// snow: 0
// snow_depth: 0
// sunrise_ts: 1607515857
// sunset_ts: 1607549703
// temp: 1.5
// ts: 1607490060
// uv: 2.36558
// valid_date: "2020-12-09"
// vis: 24.1
// weather: {icon: "c03d", code: 803, description: "Broken clouds"}
// wind_cdir: "SW"
// wind_cdir_full: "southwest"
// wind_dir: 230
// wind_gust_spd: 9.4
// wind_spd: 3.3316

// /init a new date object

// const birthday = new Date("2020-12-02");
// call getDate on date object
// let date1 = birthday.getDate();

// 30th of a month returns 29 so instead we return 1
// if (date1 === 30){
//  date1 = 1
// } else {
// we add 1 to the date to get an accurate read on the date.
//   date1++
// }
// console.log(date1);

// const dayArray = () => {
// 	props.fiveDayWeather.map(day => {
// 		return (
// 			<Day temp={{ low: day.low_temp, high: day.high_temp }} weather={} />
// 		);
// 	});
// };

// })
// <Day
// 			temp={{ low: '0', high: '5' }}
// 			weather={'raining'}
// 			moonPhase={'full'}
// 		/>
