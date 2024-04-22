import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";
import DimmedLight from "./components/Light/DimmedLight";

function App() {
	return (
		<div className="App">
			<Counter />
			<ToggleMessage message="Hi, dit is mijn bericht" />
			<DimmedLight />
		</div>
	);
}

export default App;
