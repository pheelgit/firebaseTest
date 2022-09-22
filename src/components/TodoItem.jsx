import React from "react";
import cl from "styles/TodoItem.module.css";

export const TodoItem = ({ todo, handleDelete, toggleComplete }) => {
	// const styles =todo.complete? cl.todo:
	return (
		<div
			key={todo.uuid}
			className={todo.complete ? cl.todoComplete : cl.todo}
		>
			<button
				data={todo.uuid}
				className="bg-red-200 mx-2 border-x-red-800"
				onClick={() => handleDelete(todo)}
			>
				delete
			</button>
			<button className="bg-green-200 mx-2 border-x-gray-800">
				update
			</button>
			<button
				className="mx-2"
				onClick={() => toggleComplete(todo)}
			>
				{String(todo.complete)}
			</button>
			<span>{todo.todo}</span>
		</div>
	);
};
