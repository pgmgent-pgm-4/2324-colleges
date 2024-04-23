import React, { useState } from "react";

export default function NewTodo({ addTodo }) {
	const [todo, setTodo] = useState("");
	const handleChange = (event) => {
		setTodo(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todo);
		setTodo("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo">To do</label>
			<input type="text" id="todo" value={todo} onChange={handleChange} />
			<button type="submit">add</button>
		</form>
	);
}
