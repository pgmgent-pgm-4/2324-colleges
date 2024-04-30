import "./App.css";
import { useState } from "react";
import { NewTodo, TodoList } from "./components/todos/";
import { Container } from "@mui/material";

function App() {
	const [todos, setToDos] = useState(["first Todo", "SecondTodo"]);
	const addTodo = (todo) => {
		setToDos((prev) => [...prev, todo]);
	};
	const removeTodo = (index) => {
		const nTodos = [...todos];
		nTodos.splice(index, 1);
		setToDos(nTodos);
	};
	return (
		<div className="App">
			<Container maxWidth="sm">
				<TodoList todos={todos} removeTodo={removeTodo} />
				<NewTodo addTodo={addTodo} />
			</Container>
		</div>
	);
}

export default App;
