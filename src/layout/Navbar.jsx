import React from "react";
import { Link } from "react-router-dom";
import cl from "../styles/Navbar.module.css";
import { CustomLink } from "../components/CustomLink";

export const Navbar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to="/posts">blog</CustomLink>
				<CustomLink to="/posts/23">toypage</CustomLink>
				<CustomLink to="/about">about</CustomLink>
			</nav>
		</>
	);
};
