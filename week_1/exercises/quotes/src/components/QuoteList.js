import React from "react";

export default function QuoteList({ quotes }) {
	return (
		<ul>
			{quotes.map((quote) => (
				<li>{quote}</li>
			))}
		</ul>
	);
}
