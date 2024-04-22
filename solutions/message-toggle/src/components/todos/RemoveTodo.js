import React from "react";

export default function RemoveTodo({ index, removeTodo }) {
	const handleRemoveTodo = (i) => {
		removeTodo(i);
	};
	return (
		<button
			onClick={() => {
				handleRemoveTodo(index);
			}}
		>
			x
		</button>
	);
}
