import axios from "axios";
import React, { useState, useEffect } from "react";
import { ref, child, get, onValue } from "firebase/database";
import { db } from "firebase.js";
export const Aboutpage = () => {
	const [posts, setPosts] = useState({});
	const [post, setPost] = useState("");

	useEffect(() => {
		const starCountRef = ref(db, "todos");
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			console.log(data);
			data && setPosts(Object.values(data));
		});
	}, []);

	return (
		<div>
			<h2>Aboutpage</h2>
		</div>
	);
};
