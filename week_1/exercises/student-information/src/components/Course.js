import React from "react";

export default function Course({ name, teachers }) {
	return (
		<div>
			<p>Course: {name}</p>
			<p>Teachers: {teachers.join(", ")}</p>
		</div>
	);
}
