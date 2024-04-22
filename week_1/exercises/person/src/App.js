import "./App.css";
import Person from "./components/Person";

function App() {
	const person = {
		firstname: "John",
		familyName: "Doe",
		pictureUrl: "https://example.com/profile.jpg",
		age: 30,
		length: 180, // in cm
		weight: 75, // in kg
	};

	return <Person {...person} />;
}

export default App;
