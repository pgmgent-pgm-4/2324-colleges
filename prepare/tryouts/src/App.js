import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Buttons";
import TeamMember from "./components/team/TeamMember";
import Beers from "./components/beers/Beers";

function App() {
	return (
		<div className="App">
			{/* <Buttons /> */}
			<TeamMember type="leader" />
			<TeamMember type="member" />
			<Beers />
		</div>
	);
}

export default App;
