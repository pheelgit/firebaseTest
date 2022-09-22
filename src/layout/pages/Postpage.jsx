import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { uid } from "uid";
import {
	set,
	ref,
	onValue,
	remove,
	update,
	get,
	child,
	push,
} from "firebase/database";
import { TodoItem } from "components/TodoItem";

export const Postpage = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState("");

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			if (data === null) {
				setTodos([]);
				return;
			}
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

	const toggleComplete = (todo) => {
		update(ref(db, `todos/${todo.uuid}`), {
			complete: !todo.complete,
		});
	};

	const handleDelete = (todo) => {
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
				{todos.length === 0 ? (
					<h1>no todos</h1>
				) : (
					todos.map((todo) => (
						<TodoItem
							key={todo.uuid}
							todo={todo}
							handleDelete={handleDelete}
							toggleComplete={toggleComplete}
						/>
					))
				)}
			</div>
		</div>
	);
};
