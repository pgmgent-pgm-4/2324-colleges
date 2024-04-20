import logo from "./logo.svg";
import "./App.css";
import Student from "./components/Student";

function App() {
	const student1 = {
		lastName: "Doe",
		firstName: "John",
		genderCode: 1,
		birthDate: 1995,
		courses: [
			{
				name: "Mathematics",
				teachers: ["Mr. Smith", "Ms. Johnson"],
			},
			{
				name: "Physics",
				teachers: ["Dr. Brown"],
			},
		],
	};
	return (
		<div>
			<h1>Student Profiles</h1>
			<Student {...student1} />
		</div>
	);
}

export default App;
