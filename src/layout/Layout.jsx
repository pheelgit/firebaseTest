import React from "react";
import { AppRouter } from "router/AppRouter";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import cl from "styles/Layout.module.css";

export const Layout = () => {
	return (
		<div className={cl.layout}>
			<Navbar />
			<main className={cl.main}>
				<AppRouter />
			</main>
			<Footer />
		</div>
	);
};
