import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { uid } from "uid";
import { set, ref, onValue, remove } from "firebase/database";

export const Postpage = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState("");

	useEffect(() => {
		onValue(ref(db, "/todos"), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setTodos(Object.values(data));
			}
		});
	}, []);

	const writeToDatabase = () => {
		const uuid = uid();
		set(ref(db, `todos/${uuid}`), {
			todo,
			uuid,
			complete: false,
		});
		setTodo("");
	};

	const pushToDatabase = () => {};

	const handleDelete = (todo) => {
		console.dir(todo);
		remove(ref(db, `/todos/${todo.uuid}`));
	};

	return (
		<div>
			<input
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				type="text"
			/>
			<button onClick={writeToDatabase}>submit post</button>
			<br />
			<div>
				{todos.length &&
					todos.map((todo) => (
						<div key={todo.uuid}>
							<button
								data={todo.uuid}
								className="bg-red-200 mx-2 border-x-red-800"
								onClick={() =>
									handleDelete(todo)
								}
							>
								delete
							</button>
							<button className="bg-green-200 mx-2 border-x-gray-800">
								update
							</button>
							<span key={todo.uuid}>
								{todo.todo}
							</span>
						</div>
					))}
			</div>
		</div>
	);
};
