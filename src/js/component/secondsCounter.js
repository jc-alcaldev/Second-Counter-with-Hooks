import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const SecondsCounter = () => {
	//const [count6, setCount6] = useState("0");
	//const [count5, setCount5] = useState("0");
	const [count4, setCount4] = useState("00");
	const [count3, setCount3] = useState("00");
	const [count2, setCount2] = useState("00");
	const [count1, setCount1] = useState("00");

	let counter = 0;
	const startTimer = () => {
		setInterval(() => {
			const four = Math.floor(counter / 1000);
			const three = Math.floor(counter / 100);
			const two = Math.floor(counter / 10);
			const one = Math.floor(counter / 1);
			//console.log(four, three, two, one);

			counter++;

			setCount4(four);
			setCount3(three);
			setCount2(two);
			setCount1(one);
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	return (
		<div className="Counter">
			<div className="calendar">
				{/* <i class="far fa-clock" /> */}
				hora
			</div>
			<div className="four">{count4}</div>
			<div className="three">{count3}</div>
			<div className="two">{count2}</div>
			<div className="one">{count1}</div>
		</div>
	);
};
/* SecondsCounter.propTypes = {
	digitFour: PropTypes.numbers,
	digitThree: PropTypes.bool,
	digitTwo: PropTypes.bool,
	digitOne: PropTypes.bool
}; */
