import React from "react";
import { SecondsCounter } from "./secondsCounter.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	//const miliSeg = [1000, 10000, 100000];
	return (
		<div className="Counter">
			<div className="calendar">
				{/* <i class="far fa-clock" /> */}
				Chronograph
			</div>
			<SecondsCounter miliSeg={100000} />;
			<SecondsCounter miliSeg={10000} />;<SecondsCounter miliSeg={1000} />
			;
			{/* {miliSeg.map(item => {
				console.log(item);
				<SecondsCounter item />;
			})} */}
		</div>
	);
}

{
	/* <h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */
}
