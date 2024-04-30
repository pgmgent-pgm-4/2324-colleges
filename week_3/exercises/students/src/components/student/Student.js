import React from "react";

export default function Student({ student }) {
	return (
		<div>
			{student.firsName} {student.lastName}
		</div>
	);
}
