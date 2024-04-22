import React from "react";
import RemoveTodo from "./RemoveTodo";

export default function Todo({ todo, index, removeTodo }) {
	return (
		<li>
			{todo} <RemoveTodo index={index} removeTodo={removeTodo} />
		</li>
	);
}
