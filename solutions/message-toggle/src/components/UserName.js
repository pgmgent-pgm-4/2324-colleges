import React, { useState } from "react";

export default function UserName() {
	// Stel de initiële waarde van de gebruikersnaam in op een lege string met behulp van useState
	const [userName, setUserName] = useState("");

	// Functie om de gebruikersnaam bij te werken wanneer er tekst wordt ingevoerd in het invoerveld
	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<div>
			<h2>Gebruikersnaam: {userName}</h2>
			<input
				type="text"
				value={userName}
				onChange={handleInputChange}
				placeholder="Voer hier je gebruikersnaam in"
			/>
		</div>
	);
}
