import "./App.css";
import MovieList from "./components/MovieList";

// Data
import movieData from "./data/movies.json";

function App() {
	return <MovieList movies={movieData} />;
}

export default App;
