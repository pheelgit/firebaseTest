import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to);
	return (
		<Link to={to} {...props} className={match ? "active-link" : ""}>
			{children}
		</Link>
	);
};
