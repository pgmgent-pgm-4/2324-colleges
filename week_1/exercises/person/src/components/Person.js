import React from "react";

export default function Person({
	firstname,
	familyName,
	pictureUrl,
	age,
	length,
	weight,
}) {
	return (
		<div className="person-profile">
			<img src={pictureUrl} alt={`${firstname} ${familyName}`} />
			<div className="details">
				<p>
					Name: {firstname} {familyName}
				</p>
				<p>Age: {age}</p>
				<p>Height: {length} cm</p>
				<p>Weight: {weight} kg</p>
			</div>
		</div>
	);
}
