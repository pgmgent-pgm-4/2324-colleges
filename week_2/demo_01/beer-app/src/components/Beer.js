import React, { useState } from "react";
import styled from "styled-components";
import "./beer.css";

const ArticleDefault = styled.article`
	border: 2px solid gold;
`;
const ArticleItaly = styled.article`
	background-color: red;
`;
export default function Beer({ beer }) {
	const [isItaly, setIsItaly] = useState(true);
	return (
		<>
			{isItaly ? (
				<ArticleItaly className={isItaly ? `green` : `red`}>
					<h3>
						{beer.title} - {beer.alchool}
					</h3>
					<p>{beer.description}</p>
				</ArticleItaly>
			) : (
				<ArticleDefault className={isItaly ? `green` : `red`}>
					<h3>
						{beer.title} - {beer.alchool}
					</h3>
					<p>{beer.description}</p>
				</ArticleDefault>
			)}
		</>
	);
}
