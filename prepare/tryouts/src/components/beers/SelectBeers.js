import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectBeers({ country, setCountry, countries }) {
	const handleChange = (e) => {
		setCountry(e.target.value);
	};
	return (
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={country}
			label="Age"
			onChange={handleChange}
		>
			{countries.map((countrySelect, i) => (
				<MenuItem value={countrySelect.value} key={`country-${i}`}>
					{countrySelect.name}
				</MenuItem>
			))}
		</Select>
	);
}
