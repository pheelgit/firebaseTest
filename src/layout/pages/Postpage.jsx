import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { uid } from "uid";
import { set, ref, onValue, remove } from "firebase/database";
import { TodoItem } from "components/TodoItem";

export const Postpage = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState("");

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			if (data === null) setTodos([]);
			setTodos(Object.values(data));
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

	const handleDelete = (todo) => {
		remove(ref(db, `/todos/${todo.uuid}`));
	};
	console.log(todos);
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
				{todos.length === 0 ? (
					<h1>no todos</h1>
				) : (
					todos.map((todo) => (
						<TodoItem
							key={todo.uuid}
							todo={todo}
							handleDelete={handleDelete}
						/>
					))
				)}
			</div>
		</div>
	);
};
