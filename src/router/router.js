import { Aboutpage } from "layout/pages/Aboutpage";
import { Blogpage } from "layout/pages/Blogpage";
import { Homepage } from "layout/pages/Homepage";
import { Notfoundpage } from "layout/pages/Notfoundpage";
import { Postpage } from "layout/pages/Postpage";

export const routes = [
	{ path: "/", element: <Homepage />, index: "index" },
	{ path: "/about", element: <Aboutpage /> },
	{ path: "/posts", element: <Blogpage /> },
	{ path: "/posts/:id", element: <Postpage /> },
	{ path: "*", element: <Notfoundpage /> },
];
