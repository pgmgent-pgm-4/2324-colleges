import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Flag() {
	const { selectedCountry } = useContext(LanguageContext);
	return (
		<img
			src={selectedCountry[0].flag}
			style={{ maxWidth: "100px", display: "block" }}
		/>
	);
}
