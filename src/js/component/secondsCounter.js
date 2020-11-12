import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, props.miliSeg);
	}, []);
	if (count > 9) setCount(0);

	console.log("aaaaaaa");

	return <div className="one">{count}</div>;
};

SecondsCounter.propTypes = {
	miliSeg: PropTypes.number
};
