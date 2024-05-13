import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSelector() {
	const { countries, setSelectedCountry, selectedCountry } =
		useContext(LanguageContext);
	const handleChange = (e) => {
		setSelectedCountry(
			countries.filter((country) => country.shortName == e.target.value)
		);
	};
	return (
		<select onChange={handleChange} defaultValue={selectedCountry[0].shortName}>
			{countries.map((country, i) => (
				<option key={i} value={country.shortName}>
					{country.longName}
				</option>
			))}
		</select>
	);
}
