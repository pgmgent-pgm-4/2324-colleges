import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectCountry({ countries, setCountry, country }) {
	const handleChange = (e) => {
		setCountry(e.target.value);
	};
	return (
		<Select value={country} onChange={handleChange}>
			{countries.map((country, i) => (
				<MenuItem key={`country-${i}`} value={country.value}>
					{country.name}
				</MenuItem>
			))}
		</Select>
	);
}
