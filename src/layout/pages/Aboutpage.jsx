import axios from "axios";
import React, { useState, useEffect } from "react";

import { getDatabase, ref, child, get, onValue } from "firebase/database";

export const Aboutpage = () => {
	const database = getDatabase();
	const [posts, setPosts] = useState({});
	const [post, setPost] = useState("");

	const firebaseGetTodos = async () => {
		const db = getDatabase();
		const starCountRef = ref(db, "todos");
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			console.log(data);
			data && setPosts(Object.values(data));
		});
	};

	const postFirebase = async () => {
		await axios.post(
			"https://test-todos-fc7f3-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
			{
				data: post,
			}
		);
	};

	console.log("-------");

	return (
		<div>
			<h2>Aboutpage</h2>
			<input
				type="text"
				onChange={(e) => setPost(e.target.value)}
			/>
			<button onClick={() => postFirebase()}>add posts</button>
			<br />
			<button onClick={() => firebaseGetTodos()}>
				firebaseGetTodos
			</button>
			<br />
			<div>{JSON.stringify(posts)}</div>
			<div>
				{posts.length &&
					posts.map((post, ind) => (
						<div key={ind}> {post.data}</div>
					))}
			</div>
		</div>
	);
};
