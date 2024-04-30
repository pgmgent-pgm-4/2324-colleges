import { Button } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function RemoveTodo({ index, removeTodo }) {
	const handleRemoveTodo = (i) => {
		removeTodo(i);
	};
	return (
		<Button
			onClick={() => {
				handleRemoveTodo(index);
			}}
		>
			<MdDelete />
		</Button>
	);
}
