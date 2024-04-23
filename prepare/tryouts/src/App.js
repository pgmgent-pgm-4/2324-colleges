import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Buttons";
import TeamMember from "./components/team/TeamMember";

function App() {
	return (
		<div className="App">
			<Buttons />
			<TeamMember type="leader" />
			<TeamMember type="member" />
		</div>
	);
}

export default App;
