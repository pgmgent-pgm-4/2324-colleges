import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import { flags } from "../data/country-flags";
export default function MapMarker({ longitude, latitude, code }) {
	const [currentFlagUrl, setCurrentFlagUrl] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/World_Flag_%282004%29.svg/1280px-World_Flag_%282004%29.svg.png"
	);

	useEffect(() => {
		const currentCountry = flags.filter((flag) => {
			return flag.code?.toLowerCase() === code.toLowerCase();
		});
		if (currentCountry.length > 0) setCurrentFlagUrl(currentCountry[0].flag);
	}, []);

	return (
		<Marker longitude={longitude} latitude={latitude} anchor="bottom">
			<img style={{ width: "50px" }} src={currentFlagUrl} />
		</Marker>
	);
}
