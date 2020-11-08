import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const SecondsCounter = () => {
	//const [count6, setCount6] = useState("0");
	//const [count5, setCount5] = useState("0");
	/* const [count4, setCount4] = useState("00");
	const [count3, setCount3] = useState("00");
	const [count2, setCount2] = useState("00"); */
	const [count1, setCount1] = useState(0);
	let count = 0;

	/* let interval = useRef();
	let counter = 0;
	const startTimer = () => {
		let counter = 0;
		interval = setInterval(() => {
			const four = Math.floor(counter / 1000);
			const three = Math.floor(counter / 100);
			const two = Math.floor(counter / 10);
			const one = Math.floor(counter / 1);
			//console.log(four, three, two, one);

			counter++;
		});
		if (counter < 0) {
			clearInterval(interval.current);
		} else {
			setCount4(four);
			setCount3(three);
			setCount2(two);
			setCount1(one);
		}
	};
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	}); */
	/* 	const startTimer = () => {
		console.log(count, "aaa");

		setCount1(count1 + 1);
		//count++;
	}; */
	useEffect(() => {
		setInterval(() => {
			setCount1(count);
			count++;
		}, 1000);
	}, []);

	/* count1 > 9 ? setCount1(0) : count1; */

	return (
		<div className="Counter">
			<div className="calendar">
				{/* <i class="far fa-clock" /> */}
				Chronograph
			</div>
			{/* <div className="four">{count4}</div>
			<div className="three">{count3}</div>
			<div className="two">{count2}</div> */}
			<div className="one">{count1}</div>
		</div>
	);
};
