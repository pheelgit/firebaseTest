import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./router";

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map((rout) => (
				<Route
					key={rout.path}
					path={rout.path}
					element={rout.element}
				/>
			))}
		</Routes>
	);
};
