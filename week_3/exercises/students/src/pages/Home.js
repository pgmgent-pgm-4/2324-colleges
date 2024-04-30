import React, { useEffect, useState } from "react";
import StudentList from "../components/student/StudentList";
import allStudents from "../data/students";
export default function Home() {
	const [students, setStudents] = useState([]);
    
	useEffect(() => {
		setStudents(allStudents);
	}, []);
	return (
		<div>
			<StudentList students={students} />
		</div>
	);
}
