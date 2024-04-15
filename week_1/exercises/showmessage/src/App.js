import logo from "./logo.svg";
import "./App.css";

function App() {
	let showMessage = true;
	return (
		<>
			{showMessage && (
				<p>
					Dit is een optioneel bericht dat alleen wordt weergegeven als
					showMessage true is.
				</p>
			)}
		</>
	);
}

export default App;
