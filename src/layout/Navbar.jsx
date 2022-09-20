import React from "react";
import cl from "styles/Navbar.module.css";
import { CustomLink } from "components/CustomLink";

export const Navbar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to="/about">about</CustomLink>
				<CustomLink to="/posts">posts</CustomLink>
				<CustomLink to="/posts/23">post page</CustomLink>
			</nav>
		</>
	);
};
