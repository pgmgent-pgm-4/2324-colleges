import React from "react";
import Todo from "./Todo";
import { List } from "@mui/material";

export default function TodoList({ todos,  removeTodo}) {
	return (
		<>
			<List>
				{todos.map((todo, index) => (
					<Todo todo={todo} key={`todo-${index}`} index={index} removeTodo={removeTodo}/>
				))}
			</List>
		</>
	);
}
