import { Label } from "@mui/icons-material";
import { Button, FormGroup, TextField } from "@mui/material";
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
			<FormGroup>
				<Label htmlFor="todo">To do</Label>
				<TextField
					id="todo"
					label="New To do"
					variant="outlined"
					value={todo}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<Button type="submit" variant="text">
					Add
				</Button>
			</FormGroup>
		</form>
	);
}
