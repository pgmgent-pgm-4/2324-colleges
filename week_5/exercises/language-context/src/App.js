import logo from "./logo.svg";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageArea, LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";
import Flag from "./components/Flag";

function App() {
	return (
		<LanguageArea>
			<LanguageSelector />
			<Flag />
		</LanguageArea>
	);
}

export default App;
