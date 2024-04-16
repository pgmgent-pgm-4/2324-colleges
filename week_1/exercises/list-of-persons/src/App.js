import "./App.css";

function App() {
	const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

	return (
		<ul>
			{names.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

export default App;
