import logo from "./logo.svg";
import "./App.css";

function App() {
	let age = 19;
	return (
		<>
			<h1>Welkom!</h1>
			{age >= 18 ? (
				<span>
					Je bent oud genoeg om de inhoud van deze website te bekijken.
				</span>
			) : (
				<span>
					Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te
					bekijken.
				</span>
			)}
		</>
	);
}

export default App;
