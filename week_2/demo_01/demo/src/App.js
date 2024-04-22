import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";
import DimmedLight from "./components/Light/DimmedLight";
import Username from "./components/Username";
import Colors from "./components/Colors";

function App() {
	return (
		<div className="App">
			<Counter />
			<ToggleMessage message="Hi, dit is mijn bericht" />
			<DimmedLight />
			<Username />
			<Colors />
		</div>
	);
}

export default App;
