import "./App.css";
import TeamCard from "./components/TeamCard";

function App() {
	return (
		<div className="App">
			<TeamCard jobFunction="CEO" firstName="Evelien" lastName="Rutsaert" />
			<TeamCard jobFunction="Teacher" firstName="Jan" lastName="Jansen" />
		</div>
	);
}

export default App;
