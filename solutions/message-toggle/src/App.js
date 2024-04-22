import logo from "./logo.svg";
import "./App.css";
import MessageToggle from "./components/MessageToggle";
import UserName from "./components/UserName";
import Counter from "./components/Counter";
import { useState } from "react";
import { NewTodo, TodoList } from "./components/todos/";
import DimmedLight from "./components/light/DimmedLight";
import CountEffect from "./components/CountEffect";
import CountUseEffect from "./components/CountUseEffect";

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
			<MessageToggle />
			<UserName />
			<Counter />
			<TodoList todos={todos} removeTodo={removeTodo} />
			<NewTodo addTodo={addTodo} />
			<DimmedLight />
			{/* <CountEffect /> */}
			<CountUseEffect />
		</div>
	);
}

export default App;
