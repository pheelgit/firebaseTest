import React from "react";
import { Link } from "react-router-dom";

export const Notfoundpage = () => {
	return (
		<div>
			<h2>Notfoundpage</h2>
			<p>
				go to <Link to="./">home</Link>{" "}
			</p>
		</div>
	);
};
