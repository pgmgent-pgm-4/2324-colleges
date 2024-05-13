import logo from "./logo.svg";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import MapView from "./components/MapView";

function App() {
	return (
		<div>
			<MapView coords={{ long: 3.71667, lat: 51.05 }} />
		</div>
	);
}

export default App;
