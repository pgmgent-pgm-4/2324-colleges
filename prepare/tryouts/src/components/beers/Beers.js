import React, { useState, useEffect } from "react";
import SelectBeers from "./SelectBeers";
import Beer from "./Beer";

export default function Beers() {
	const [country, setCountry] = useState("italy");
	const [beers, setBeers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const countries = [
		{ value: "italy", name: "Italy" },
		{ value: "belgium", name: "Belgium" },
		{ value: "spain", name: "Spain" },
	];

	useEffect(() => {
		setIsLoading(true);
		setBeers([]);
		const url = "https://beers-list.p.rapidapi.com/beers/" + country;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_API_BEERKEY,
				"X-RapidAPI-Host": "beers-list.p.rapidapi.com",
			},
		};
		fetch(url, options)
			.then((result) => result.json())
			.then((data) => {
				setBeers(data);
				setIsLoading(false);
			});
	}, [country]);

	return (
		<>
			<SelectBeers
				countries={countries}
				country={country}
				setCountry={setCountry}
			/>
			{isLoading && <p>....loading</p>}
			{!isLoading && (
				<>
					<h2>
						All the beers from{" "}
						{country.charAt(0).toUpperCase() + country.slice(1)} -{" "}
						{beers.length}
					</h2>
					{beers.map((beer, i) => (
						<Beer key={`beer-${i}`} beer={beer} />
					))}
				</>
			)}
		</>
	);
}
