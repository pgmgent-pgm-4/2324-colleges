import React from "react";
import Course from "./Course";

export default function Student({
	lastName,
	firstName,
	genderCode,
	birthDate,
	courses,
}) {
	return (
		<div>
			<h2>Student Info</h2>
			<p>Last Name: {lastName}</p>
			<p>First Name: {firstName}</p>
			<p>Gender Code: {genderCode}</p>
			<p>Birth Date: {birthDate}</p>
			<h3>Courses</h3>
			{courses.map((course, index) => (
				<Course key={`course-${index}`} {...course} />
			))}
		</div>
	);
}
