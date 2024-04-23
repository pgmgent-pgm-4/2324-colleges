import React from "react";
import "./movie.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
	return (
		<ul className="movie-list">
			{movies.map((movie, i) => (
				<li className="movie">
					<MovieCard movie={movie} />
				</li>
			))}
		</ul>
	);
}
