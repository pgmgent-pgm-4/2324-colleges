import React from "react";
import MovieCard from "./MovieCard";
import "./movies.css";

export default function MovieList({ movies }) {
	return (
		<div className="list">
			{movies.map((movie, i) => (
				<MovieCard movie={movie} key={`key-${i}`} />
			))}
		</div>
	);
}
