import React from "react";

export const TodoItem = ({ todo, handleDelete }) => {
	return (
		<div key={todo.uuid}>
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
			<span>{todo.todo}</span>
		</div>
	);
};
