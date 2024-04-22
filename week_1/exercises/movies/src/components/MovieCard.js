import React from "react";

export default function MovieCard({ movie }) {
	return (
		<div className="card">
			<h2>{movie.title}</h2>
			<p>{movie.synopsis}</p>
			<div>
				{movie.tags.map((tag, i) => (
					<span key={`tag-${i}`}>{tag} </span>
				))}
			</div>
		</div>
	);
}
