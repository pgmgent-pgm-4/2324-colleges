import "./App.css";
import { Container } from "@mui/material";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Root from "./layout/Root";
import { Home } from "./pages";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="/" element={<Home />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
