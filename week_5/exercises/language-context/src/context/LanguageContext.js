import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageArea = ({ children }) => {
	const [countries, setCountries] = useState([
		{
			shortName: "nl",
			longName: "Nederlands",
			flag: "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png",
		},
		{
			shortName: "en",
			longName: "English",
			flag: "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
		},
		{
			shortName: "de",
			longName: "Deutsch",
			flag: "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
		},
	]);
	const [selectedCountry, setSelectedCountry] = useState([
		{
			shortName: "nl",
			longName: "Nederlands",
			flag: "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png",
		},
	]);

	return (
		<LanguageContext.Provider
			value={{ countries, selectedCountry, setSelectedCountry }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
