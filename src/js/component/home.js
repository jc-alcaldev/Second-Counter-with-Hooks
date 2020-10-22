import React from "react";
import { SecondsCounter } from "./secondsCounter.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return <SecondsCounter />;
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
