import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allStudents from "../data/student";
import Student from "../components/students/Student";

export default function StudentDetails() {
	const { studentId } = useParams();
	const [student, setStudent] = useState(null);
	useEffect(() => {
		const newStudent = allStudents.filter(
			(student) => student.id === studentId
		);
		setStudent(newStudent[0]);
	}, []);
	return (
		<div>
			StudentDetails: {studentId}
			{student && <Student student={student} />}
		</div>
	);
}
