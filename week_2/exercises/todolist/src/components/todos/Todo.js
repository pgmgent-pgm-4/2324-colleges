import React from "react";
import RemoveTodo from "./RemoveTodo";
import { ListItem } from "@mui/material";

export default function Todo({ todo, index, removeTodo }) {
	return (
		<ListItem>
			{todo} <RemoveTodo index={index} removeTodo={removeTodo} />
		</ListItem>
	);
}
