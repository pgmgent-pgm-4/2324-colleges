import React from "react";
import { Box } from "@mui/material";
import { indigo, teal } from "@mui/material/colors";

export default function BlogPost({ post, alreadyRead }) {
	post = post[0];
	return (
		<Box
			style={
				alreadyRead
					? { backgroundColor: indigo[100] }
					: { backgroundColor: teal[100] }
			}
		>
			<h2>{post.title}</h2>
			<div>{post.description}</div>
		</Box>
	);
}
