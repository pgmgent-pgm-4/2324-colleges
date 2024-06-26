import React, { useEffect, useState } from "react";
import allStudents from "../data/student";
import StudentList from "../components/students/StudentList";
import StudentSearchForm from "../components/students/StudentSearchForm";

export default function Students() {
	const [students, setStudents] = useState(allStudents);
	const [filteredStudents, setFilteredStudents] = useState(allStudents);
	const [inputSearch, setInputSearch] = useState("");
	useEffect(() => {
		const newStudents = students.filter(
			(student) =>
				student.firstName.toLowerCase().includes(inputSearch.toLowerCase()) ||
				student.lastName.toLowerCase().includes(inputSearch.toLowerCase())
		);
		setFilteredStudents(newStudents);
	}, [inputSearch]);

	return (
		<div>
			<img src="/evelien.png" />
			<StudentSearchForm
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
			/>
			<StudentList students={filteredStudents} />
		</div>
	);
}
