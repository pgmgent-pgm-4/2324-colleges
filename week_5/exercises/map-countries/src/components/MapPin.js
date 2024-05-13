import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import { countriesFlags } from "../data/country-flag";

export default function MapPin({ coords, isoCode }) {
	const [currentFlagUrl, setCurrentFlagUrl] = useState("");
	useEffect(() => {
		//get the right flag from data country-flag
		const currentCountry = countriesFlags.filter((country) => {
			return country.code === isoCode.toLowerCase();
		});

		//if country has flag in data, set url to currentFlagUrl, otherwise, set default
		setCurrentFlagUrl(
			currentCountry.length > 0
				? currentCountry[0].flag
				: "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg"
		);
	}, [isoCode]);

	//check if coords exist for that country, otherwise return empty element
	if (isNaN(parseFloat(coords.long))) return <></>;
	return (
		<Marker
			longitude={parseFloat(coords.long)}
			latitude={parseFloat(coords.lat)}
			anchor="bottom"
		>
			<img src={currentFlagUrl} width="20px" />
		</Marker>
	);
}
