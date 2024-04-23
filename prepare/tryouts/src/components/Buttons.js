import {
	Container,
	Paper,
	Step,
	Stepper,
	Box,
	StepLabel,
	Select,
	MenuItem,
	List,
	ListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const DefaultButton = styled.button`
	background-color: tomato;
	border: 1px solid gold;
`;

export default function Buttons() {
	const [country, setCountry] = useState("italy");
	const [beers, setBeers] = useState([]);

	useEffect(() => {
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
			});
	}, [country]);
	const handleChange = (e) => {
		setCountry(e.target.value);
	};
	return (
		<Container maxWidth="sm">
			<Paper elevation={3}>
				<DefaultButton>Buttons</DefaultButton>
			</Paper>
			<Box sx={{ width: "100%" }}>
				<Stepper activeStep={1} alternativeLabel>
					<Step key="step1">
						<StepLabel>Test</StepLabel>
					</Step>
					<Step key="step2">
						<StepLabel>Test</StepLabel>
					</Step>
				</Stepper>
			</Box>
			<Box>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={country}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value="italy">Italy</MenuItem>
					<MenuItem value="belgium">Belgium</MenuItem>
					<MenuItem value="spain">Spain</MenuItem>
				</Select>
			</Box>
			<Box>
				<List>
					{beers &&
						beers.map((beer, i) => (
							<ListItem key={`beer-${i}`}>{beer.title}</ListItem>
						))}
				</List>
			</Box>
		</Container>
	);
}
