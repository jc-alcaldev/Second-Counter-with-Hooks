import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	const [count1, setCount1] = useState(0);
	let count = 0;

	useEffect(() => {
		setInterval(() => {
			setCount1(count);
			count++;
		}, props.miliSeg);
	}, []);

	/* count1 > 9 ? setCount1(0) : count1; */

	return <div className="one">{count1}</div>;
};

SecondsCounter.propTypes = {
	miliSeg: PropTypes.number
};
