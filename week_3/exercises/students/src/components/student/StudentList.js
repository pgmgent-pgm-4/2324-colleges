import React from "react";
import Student from "./Student";

export default function StudentList({ students }) {

	return (
		<>
			{students.map((student, i) => (
				<Student key={`student-${i}`} student={student} />
			))}
		</>
	);
}
