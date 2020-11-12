import React from "react";
import { SecondsCounter } from "./secondsCounter.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	var one_seg = 1000;
	return (
		<div className="Counter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<SecondsCounter miliSeg={one_seg * 10000} />
			<SecondsCounter miliSeg={one_seg * 1000} />
			<SecondsCounter miliSeg={one_seg * 100} />
			<SecondsCounter miliSeg={one_seg * 10} />
			<SecondsCounter miliSeg={one_seg} />
		</div>
	);
}
