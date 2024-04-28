import logo from "./logo.svg";
import "./App.css";
import Toast from "./components/Toast";

function App() {
	return (
		<div className="App">
			<Toast type="warning" message="first warning oh no you didn't" />
			<Toast type="error" message="oh no you didn't" />
			<Toast type="success" message="oh no you didn't" />
		</div>
	);
}

export default App;
