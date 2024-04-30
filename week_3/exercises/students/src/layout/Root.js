import { Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<Container>
			<Typography variant="h1" gutterBottom>
				Students
			</Typography>
			<Outlet />
		</Container>
	);
}
