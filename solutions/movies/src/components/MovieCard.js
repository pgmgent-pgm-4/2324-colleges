import React from "react";

export default function MovieCard({ movie }) {
	return (
		<>
			<h2>{movie.title}</h2>
			<p>{movie.synopsis}</p>
			<ul>
				{movie.tags.map((tag, i) => (
					<span key={`tag-${i}`}> {tag} </span>
				))}
			</ul>
		</>
	);
}
