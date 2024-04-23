import React, { useState, useEffect } from "react";
import Beer from "./Beer";

export default function Beers() {
	const [country, setCountry] = useState("italy");
	const [beers, setBeers] = useState([]);

	// console.log(process.env.REACT_APP_API_BEER_KEY);

	useEffect(() => {
		const url = "https://beers-list.p.rapidapi.com/beers/" + country;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_API_BEER_KEY,
				"X-RapidAPI-Host": "beers-list.p.rapidapi.com",
			},
		};
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				setBeers(data);
				// console.log(data);
			});
	}, [country]);

	return (
		<div>
			{beers.map((beer, i) => (
				<Beer key={`beer-${i}`} beer={beer} />
			))}
		</div>
	);
}
