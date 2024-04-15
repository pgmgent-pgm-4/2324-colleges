import React from "react";

export default function TeamCard({ jobFunction, firstName, lastName }) {
	return (
		<div>
			<h2>
				{firstName} {lastName}
			</h2>
			<h3>{jobFunction}</h3>
		</div>
	);
}
