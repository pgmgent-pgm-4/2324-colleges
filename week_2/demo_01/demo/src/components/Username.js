import React, { useState, useEffect } from "react";

export default function Username() {
	const [name, setName] = useState("");
	useEffect(
		() => {
			// Runs side effect here
			console.log("Mounted or rerenderd");
			return () => {
				// Do clean up here
				console.log("Clean up - unmounted");
			};
		}, [name]
		// Array of dependencies
	);

	const handleChange = (e) => {
		setName(e.target.value);
	};
	return (
		<div>
			<div>{name}</div>
			<label htmlFor="username">Username</label>
			<input id="username" type="text" value={name} onChange={handleChange} />
		</div>
	);
}
