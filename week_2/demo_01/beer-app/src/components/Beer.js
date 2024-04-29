import React from "react";
import styled from "styled-components";
import "./beer.css";
import { Card, CardContent } from "@mui/material";
import { Button } from "flowbite-react";

const ArticleDefault = styled.article`
	border: 2px solid gold;
`;
const ArticleItaly = styled.article`
	background-color: red;
`;
export default function Beer({ beer }) {
	return (
		<>
			<Button color="blue">Blue</Button>
			<Card variant="outlined">
				<CardContent>
					<h3>
						{beer.title} - {beer.alchool}
					</h3>
					<p>{beer.description}</p>
				</CardContent>
			</Card>
		</>
	);
}
