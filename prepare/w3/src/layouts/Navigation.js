import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import ROUTES from "../constants/routes";
import { NavLink } from "react-router-dom";
export default function Navigation() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
						{ROUTES.map((route, i) => (
							<Button
								key={route.label}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								<NavLink to={route.path} >{route.label}</NavLink>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
