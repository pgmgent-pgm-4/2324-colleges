import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos,  removeTodo}) {
	return (
		<>
			<ul>
				{todos.map((todo, index) => (
					<Todo todo={todo} key={`todo-${index}`} index={index} removeTodo={removeTodo}/>
				))}
			</ul>
		</>
	);
}
