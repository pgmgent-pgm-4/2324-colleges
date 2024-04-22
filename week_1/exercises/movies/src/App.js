import "./App.css";

import movieData from "./data/movies.json";
import MovieList from "./components/MovieList";

function App() {
	// console.log(movieData);
	return <MovieList movies={movieData} />;
}

export default App;
